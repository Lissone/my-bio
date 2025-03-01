export interface ContentLanguage {
  readonly lang: string;
  readonly email: string;
  readonly socials: SocialsContent[];
  readonly presentationSection: PresentationSectionContent;
  readonly aboutSection: AboutSectionContent;
  readonly jobsSection: JobsSectionContent;
  readonly projectsSection: ProjectsSectionContent;
  readonly contactSection: ContactSectionContent;
  readonly headerButtons: HeaderButtons;
  readonly sharedButtons: {
    readonly resumeCv: string;
    readonly resumeButtonLabel: string;
    readonly contactButtonLabel: string;
  };
}

export interface SocialsContent {
  readonly name: string;
  readonly link: string;
}

export interface HeaderButtons {
  readonly presentationButtonTooltip: string;
  readonly aboutButtonTooltip: string;
  readonly workExperiencesButtonTooltip: string;
  readonly projectsButtonTooltip: string;
}

// -----------------------------------------------------------//

export interface PresentationSectionContent {
  readonly heading: string[];
  readonly text: string;
  readonly yearFirstWorkExperience: number;
}

// -----------------------------------------------------------//

export interface AboutSectionContent {
  readonly heading: string[];
  readonly text: string;
  readonly profilePhoto: {
    readonly url: string;
    readonly alt: string;
  };
  readonly recentTechnologies: string[];
}

// -----------------------------------------------------------//

export interface JobsSectionContent {
  readonly heading: string[];
  readonly jobs: Job[];
}

export interface Job {
  readonly company: string;
  readonly siteLink: string;
  readonly logo: {
    readonly url: string;
    readonly contrastColor: string;
  };
  readonly experiences: {
    readonly role: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly activities: string[];
  }[];
}

// -----------------------------------------------------------//

export interface ProjectsSectionContent {
  readonly heading: string[];
  readonly projects: ProjectContent[];
  readonly thumbnailAltLabel: string;
  readonly prototypeLabel: string;
  readonly repositoryLabel: string;
  readonly showMoreButtonLabel: string;
  readonly projectsNotfoundLabel: string;
  readonly collaborationLabel: string;
  readonly collaborationModalTitle: string;
  readonly collaborationModalText: string;
  readonly filterNameTitleLabel: string;
  readonly filterCategoryTooltipLabel: string;
  readonly filterCategoryTitleLabel: string;
  readonly filterCategoryLabels: ProjectsCategoryFilterLabels[];
}

export type ProjectsCategoryFilterLabelsKeys =
  | 'all'
  | 'repositories'
  | 'production'
  | 'designs'
  | 'fullstack'
  | 'web'
  | 'mobile'
  | 'freelance'
  | 'responsive';
export interface ProjectsCategoryFilterLabels {
  readonly key: ProjectsCategoryFilterLabelsKeys;
  readonly label: string;
}

// -------------

type GoodHabitsKeys = 'eslint' | 'prettier' | 'test' | 'commit-lint' | 'componentized';
type DetailsKeys =
  | 'web'
  | 'mobile'
  | 'freelance'
  | 'desktop'
  | 'responsive'
  | 'design'
  | 'fullstack'
  | 'figma';

interface Collaborator {
  readonly name: string;
  readonly role: string;
  readonly photoUrl: string | null;
  readonly socials: SocialsContent[];
}

export interface ProjectContent {
  readonly name: string;
  readonly description: string;
  readonly mainTechnologies: string[];
  readonly thumbnailUrl: string;
  readonly goodHabits: {
    readonly key: GoodHabitsKeys;
    readonly label: string;
  }[];
  readonly details: {
    readonly key: DetailsKeys;
    readonly label: string;
  }[];
  readonly collaborators: Collaborator[] | null;
  readonly prototypeLink: string | null;
  readonly repositoryLink: string | null;
  readonly productionLink: string | null;
}

// -----------------------------------------------------------//

interface InputContent {
  readonly label: string;
  readonly placeholder: string;
}

export interface SendMessageModalContent {
  readonly title: string;
  readonly text: string;
  readonly emailMessageSuccess: string;
  readonly emailMessageError: string;
  readonly buttonSendMessage: string;
  readonly input: {
    readonly name: InputContent;
    readonly email: InputContent;
    readonly message: InputContent;
  };
  readonly validationInput: SendMessageModalContentValidationInput;
}

export interface SendMessageModalContentValidationInput {
  readonly nameRequiredLabel: string;
  // -------
  readonly emailRequiredLabel: string;
  readonly emailInvalidLabel: string;
  // -------
  readonly messageRequiredLabel: string;
  readonly messageMinLabel: string;
}

export interface ContactSectionContent {
  readonly heading: string[];
  readonly text: string;
  readonly sendMessageModalContent: SendMessageModalContent;
}
