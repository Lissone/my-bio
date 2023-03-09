export interface ContentLanguage {
  readonly lang: string
  readonly email: string
  readonly socials: SocialsContent[]
  readonly presentationSection: PresentationSectionContent
  readonly aboutSection: AboutSectionContent
  readonly jobsSection: JobsSectionContent
  readonly projectsSection: ProjectsSectionContent
  readonly contactSection: ContactSectionContent
  readonly sharedButtons: {
    readonly resumeCv: string
    readonly resumeButtonLabel: string
    readonly contactButtonLabel: string
  }
}

export interface SocialsContent {
  readonly name: string
  readonly link: string
}

// -----------------------------------------------------------//

export interface PresentationSectionContent {
  readonly heading: string[]
  readonly text: string
}

// -----------------------------------------------------------//

export interface AboutSectionContent {
  readonly heading: string
  readonly text: string
  readonly profilePhoto: {
    readonly url: string
    readonly alt: string
  }
  readonly recentTechnologies: string[]
}

// -----------------------------------------------------------//

export interface JobsSectionContent {
  readonly heading: string
  readonly jobs: {
    readonly company: string
    readonly experiences: {
      readonly siteLink: string
      readonly role: string
      readonly startDate: string
      readonly endDate: string
      readonly activities: string[]
    }[]
  }[]
}

// -----------------------------------------------------------//

export interface ProjectsSectionContent {
  readonly heading: string
  readonly projects: ProjectContent[]
  readonly thumbnailAltLabel: string
  readonly prototypeLabel: string
  readonly repositoryLabel: string
  readonly showMoreButtonLabel: string
  readonly projectsNotfoundLabel: string
  readonly collaborationLabel: string
  readonly collaborationModalTitle: string
  readonly collaborationModalText: string
  readonly filterTitleLabel: string
  readonly filtersLabels: ProjectsFiltersLabels[]
}

export type ProjectsFiltersLabelsKeys =
  | 'all'
  | 'repositories'
  | 'production'
  | 'designs'
  | 'fullstack'
  | 'web'
  | 'mobile'
  | 'responsive'
export interface ProjectsFiltersLabels {
  readonly key: ProjectsFiltersLabelsKeys
  readonly label: string
}

// -------------

type GoodHabitsKeys = 'eslint' | 'prettier' | 'test' | 'componentized'
type DetailsKeys = 'web' | 'mobile' | 'desktop' | 'responsive' | 'design' | 'fullstack'

interface Collaborator {
  readonly name: string
  readonly role: string
  readonly photoUrl: string | null
  readonly socials: SocialsContent[]
}

export interface ProjectContent {
  readonly name: string
  readonly description: string
  readonly mainTechnologies: string[]
  readonly thumbnailUrl: string
  readonly goodHabits: {
    readonly key: GoodHabitsKeys
    readonly label: string
  }[]
  readonly details: {
    readonly key: DetailsKeys
    readonly label: string
  }[]
  readonly collaborators: Collaborator[] | null
  readonly prototypeLink: string | null
  readonly repositoryLink: string | null
  readonly productionLink: string | null
}

// -----------------------------------------------------------//

export interface ContactSectionContent {
  readonly heading: string[]
  readonly text: string
}
