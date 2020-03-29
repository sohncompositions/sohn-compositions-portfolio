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

declare interface IReferral { }
declare interface IHeader { }
declare interface IHomePage extends IPageConfig { }

declare interface IBioPage extends IPageConfig {
    referrals: IReferral[];
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
    email: string;
    successMessage: string;
    errorMessage: string;
}

declare interface IContactPage extends IPageConfig {
    fields: IFields;
    emailServer: IEmailServer
}

declare interface ISocialMediaLink {
    url: string;
    iconLabel: string;
}

declare interface IConfig {
    audioPlayer: IAudioPlayer;
    header: IHeader;
    homePage: IHomePage;
    bioPage: IBioPage;
    contactPage: IContactPage;
    socialMediaLinks: ISocialMediaLink[];
}