import type { ImageMetadata } from "astro";
import type { DisplayType } from './display-type';

import TravelSG_Icon from '@assets/app-icons/travelsg.png';
import TWSJ_Icon from '@assets/app-icons/twsj.png';
import Merlion_News_Icon from '@assets/app-icons/merlion-news.png';

export interface App {
    page: string,
    name: string,
    description: string,
    link: string,
    github?: string,
    icon_location: ImageMetadata,
    display_types: DisplayType,
}

export const apps: App[] = [
    {
        page: "/travelsg",
        name: "TravelSG",
        description: "Bus Arrival Tracker. Mainly featuring Live Activity for Bus Arrival.",
        link: "https://apps.apple.com/sg/app/travel-sg/id6444826465",
        icon_location: TravelSG_Icon,
        display_types: {
            watch: true,
            mobile: true,
            tablet: true,
            desktop: false,
            web: false,
            widget: true
        } as DisplayType
    }, 
    {
        page: "/twsj",
        name: "The Watch Street Journal",
        description: "News on the Apple Watch. Sourced from Google News.",
        link: "https://apps.apple.com/sg/app/the-watch-street-journal/id6450393866",
        github: "https://github.com/Ju-Long/The-Watch-Street-Journal.git",
        icon_location: TWSJ_Icon,
        display_types: {
            watch: true,
            mobile: false,
            tablet: false,
            desktop: false,
            web: false,
            widget: false
        } as DisplayType
    }, 
    {
        page: "/merlion-news",
        name: "Merlion News",
        description: "News of Singapore. All in one app.",
        link: "https://apps.apple.com/sg/app/merlion-news/id6451491959",
        icon_location: Merlion_News_Icon,
        display_types: {
            watch: false,
            mobile: true,
            tablet: true,
            desktop: true,
            web: false,
            widget: false
        } as DisplayType
    }
]
