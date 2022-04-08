import { GoogleSpreadsheet } from 'google-spreadsheet'
import { v4 as uuidv4 } from 'uuid'
import type { Category, Subcategory, Provider } from '../components/ProvidersList'

const SPREADSHEET_ID = "12zifFI7KceaRA2vh4ZBYKrvjfFE3hYt6u3xRUxJEp-M"

export async function getProvidersList(): Promise<Category[]> {
  const sheet = await getSheet()
  const rows = await sheet.getRows()
  const providers = rows.map(mapRow)
  return categorizeProviders(providers)
}

function categorizeProviders(providers: Provider[]): Category[] {
  const categories: Category[] = []
  providers.forEach(provider => {
    const category = findCategory(categories, provider)
    const subcategory = findSubcategory(category, provider)
    subcategory.providers.push(provider)
  })
  return categories
}

function findCategory(categories: Category[], provider: Provider): Category {
  let category: Category | undefined = categories.find(c => c.name == provider.category)
  if (!category) {
    category = {
      id: uuidv4(),
      name: provider.category,
      subcategories: [],
    }
    categories.push(category)
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
  return {
    category: row.Category || '',
    subcategory: row.Provider || '',
    title: row.Title || '',
    description: row.Description || null,
    phone: row.Phone || null,
    link: row.Link || null,
    email: row.Email || null,
    instagram: row.Instagram || null,
  }
}
