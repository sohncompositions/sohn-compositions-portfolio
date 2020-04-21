declare interface ILogo extends IAsset { }
declare interface IIcon extends IAsset { }
declare interface IAsset {
    filename: string;
}
declare interface IPageConfig {
    title: string;
    subtitle: string;
}

declare interface IAudioPlayer {
    categories: string[],
    tracks: ITrack[]
}

declare interface ITrack extends IAsset {
    title: string;
    category: string;
}

declare interface IReferral {
    name: string;
    company: string;
    avatarFilename: string;
    quote: string;
}
declare interface IHeader { }
declare interface IFooter {
    welcomeMessage: string;
}
declare interface IHomePage extends IPageConfig { }

declare interface IBioPage extends IPageConfig {
    bio: string[];
    referrals: IReferral[];
    referralTitle: string;
}

declare type FieldTypes = 'text' | 'date' | 'number'; // Add more later
declare interface IField {
    type: FieldTypes;
    required?: boolean;
    email?: boolean;
}

declare interface IFields {
    [K: string]: IField;
}

declare interface IEmailServer {
    url: string;
    successMessage: string;
    errorMessage: string;
}

declare interface IContactPage extends IPageConfig {
    fields: IFields;
    email: string;
    emailServer: IEmailServer;
    formCaption: string;
}

declare interface ISocialMediaLink {
    url: string;
    iconLabel: string;
}

declare interface IConfig {
    audioPlayer: IAudioPlayer;
    header: IHeader;
    footer: IFooter;
    homePage: IHomePage;
    bioPage: IBioPage;
    contactPage: IContactPage;
    socialMediaLinks: ISocialMediaLink[];
}