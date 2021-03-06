import { GoogleSpreadsheet } from 'google-spreadsheet'
import { v4 as uuidv4 } from 'uuid'
import type { Heading, Category, Subcategory, Provider } from '../components/ProvidersList'

const SPREADSHEET_ID = "12zifFI7KceaRA2vh4ZBYKrvjfFE3hYt6u3xRUxJEp-M"

export async function getProvidersList(): Promise<Heading[]> {
  const sheet = await getSheet()
  const rows = await sheet.getRows()
  const providers = rows.map(mapRow)
  return categorizeProviders(providers)
}

function categorizeProviders(providers: Provider[]): Heading[] {
  const headings: Heading[] = []
  providers.forEach(provider => {
    const heading = findHeading(headings, provider)
    const category = findCategory(heading, provider)
    const subcategory = findSubcategory(category, provider)
    subcategory.providers.push(provider)
  })
  return headings
}

function findHeading(headings: Heading[], provider: Provider): Heading {
  let heading: Heading | undefined = headings.find(h => h.name == provider.heading)
  if (!heading) {
    heading = {
      id: uuidv4(),
      name: provider.heading,
      categories: [],
    }
    headings.push(heading)
  }
  return heading
}

function findCategory(heading: Heading, provider: Provider): Category {
  let category: Category | undefined = heading.categories.find(c => c.name == provider.category)
  if (!category) {
    category = {
      id: uuidv4(),
      name: provider.category,
      subcategories: [],
    }
    heading.categories.push(category)
  }
  return category
}

function findSubcategory(category: Category, provider: Provider): Subcategory {
  let subcategory: Subcategory | undefined = category.subcategories.find(s => s.name == provider.subcategory)
  if (!subcategory) {
    subcategory = {
      id: uuidv4(),
      name: provider.subcategory,
      providers: [],
    }
    category.subcategories.push(subcategory)
  }
  return subcategory
}

async function getSheet() {
  const credentials = JSON.parse(process.env.GOOGLE_CLIENT_KEY as string)
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID)
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  return doc.sheetsByIndex[0]
}

function mapRow(row: any): Provider {
  const description = row.Description || ''
  const keywords = (row.Keywords || '')
        .split(',')
        .map((k: string) => k.trim())
  return {
    id: uuidv4(),
    heading: row.Heading || '',
    category: row.Category || '',
    subcategory: row.Subcategory || '',
    title: row.Title || '',
    description,
    phone: row.Phone || '',
    link: row.Website || '',
    email: row.Email || '',
    instagram: row.Instagram || '',
    instagramDisplay: getInstagramDisplay(row.Instagram) || '',
    facebook: row.Facebook || '',
    keywords,
  }
}

function getInstagramDisplay(url?: string) {
  try {
    if (url) {
      let pathname = (new URL(url)).pathname
      if (pathname[0] == '/') {
        pathname = pathname.slice(1)
      }
      if (pathname[pathname.length - 1] == '/') {
        pathname = pathname.slice(0, pathname.length - 1)
      }
      return '@' + pathname
    }
  }
  catch (e) {
  }
  return undefined
}
