import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { mauve } from '@radix-ui/colors'
import { styled } from '../stitches.config'
import { SectionStack } from './SectionStack'
import { Text } from './Text'
import { ListItem } from './ListItem'
import { DefinitionList } from './DefinitionList'

export interface Provider {
  category: string
  subcategory?: string
  title: string
  description?: string
  phone?: string
  link?: string
  email?: string,
  instagram?: string,
}

export interface Subcategory {
  id: string,
  name?: string
  providers: Provider[]
}

export interface Category {
  id: string,
  name: string
  subcategories: Subcategory[]
}

const Separator = styled(SeparatorPrimitive.Root, {
  backgroundColor: mauve.mauve7,
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
});


interface ProvidersListProps {
  categories: Category[]
}

export function ProvidersList(props: ProvidersListProps) {
  const { categories = [] } = props
  return (
    <SectionStack>
      {categories.map((c, i) => <Category key={i} category={c} />)}
    </SectionStack>
  )
}

interface CategoryProps {
  category: Category
}

function Category(props: CategoryProps) {
  const { category } = props
  return (
    <SectionStack.Section>
      <Text as="h3" color="primary" id={category.id} size="xl">{category.name}</Text>
      <div style={{marginBottom: '40px'}}>
        {category.subcategories.map((s, i) => <Subcategory key={i} subcategory={s} />)}
      </div>
      <div style={{marginBottom: '20px'}}>
        <Separator />
      </div>
    </SectionStack.Section>
  )
}

const List = styled('div', {
  '& > *:not(:last-child)': {
    marginBottom: '30px',
  },
})

interface SubcategoryProps {
  subcategory: Subcategory
}

function Subcategory(props: SubcategoryProps) {
  const { subcategory } = props
  return (
    <>
      <Text as="h4" color="secondary" id={subcategory.id} size="bg">{subcategory.name}</Text>
      <List>
        {subcategory.providers.map((p, i) => <ProvidersListItem key={i} provider={p} />)}
      </List>
    </>
  )
}

interface ProvidersListItemProps {
  provider: Provider
}

function ProvidersListItem(props: ProvidersListItemProps) {
  const { provider } = props
  return (
    <ListItem
      title={provider.title}
      description={provider.description}
    >
      <div style={{marginTop: 18, marginBottom: 18}}>
        <DefinitionList>
          {provider.link && ([
            <DefinitionList.Term key={0} color="accent">Website: </DefinitionList.Term>,
            <DefinitionList.Definition key={1}><a href={provider.link}>{provider.link}</a></DefinitionList.Definition>,
          ])}
          {provider.email && ([
            <DefinitionList.Term key={2} color="accent">Email: </DefinitionList.Term>,
            <DefinitionList.Definition key={3}><a href={`mailto:{provider.email}`}>{provider.email}</a></DefinitionList.Definition>,
          ])}
          {provider.phone && ([
            <DefinitionList.Term key={4} color="accent">Phone: </DefinitionList.Term>,
            <DefinitionList.Definition key={5}>{provider.phone}</DefinitionList.Definition>,
          ])}
          {provider.instagram && ([
            <DefinitionList.Term key={4} color="accent">Instagram: </DefinitionList.Term>,
            <DefinitionList.Definition key={5}><a href={provider.instagram}>{provider.instagram}</a></DefinitionList.Definition>,
          ])}
        </DefinitionList>
      </div>
    </ListItem>
  )
}
