/* eslint-disable @typescript-eslint/no-empty-interface */
type ILogo = IAsset
type IIcon = IAsset
declare interface IAsset {
    filename: string;
}
declare interface IPageConfig {
    title: string;
    subtitle: string;
}

declare interface IAudioPlayer {
    apiURL: string;
    categories: string[];
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
type IHomePage = IPageConfig;

declare interface IBioPage extends IPageConfig {
    bio: string[];
    referrals: IReferral[];
    referralTitle: string;
}

declare interface IField {
    required?: boolean;
    email?: boolean;
    label: string;
}

declare interface IFields {
    [K: string]: IField;
}

declare interface IEmailServer {
    url: string;
    successMessage: string;
    errorMessage: string;
}

declare interface IEmail {
    sender: string;
    to: string;
    subject: string;
    message: string;
}
declare interface IContactPage extends IPageConfig {
    email: string;
    emailServer: IEmailServer;
    formCaption: string;
    selections: string[];
    fields: IFields;
}

declare interface IMusicService {
    title: string;
    content: string;
    imgFilename: string;
    option: string;
    actionText: string;
}

declare interface ISellingPoints {
    title: string;
    content: string;
}

declare interface IMusicServicesPage extends IPageConfig {
    services: IMusicService[];
    sellingPointSection: {
        title: string;
        sellingPoints: ISellingPoints[];
    }
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
    musicServicesPage: IMusicServicesPage;
    socialMediaLinks: ISocialMediaLink[];
}