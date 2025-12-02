import type { ImageMetadata } from "astro";
import type { DisplayType } from './display-type';

import TravelSG_Icon from '@assets/app-icons/travelsg.png';
import TWSJ_Icon from '@assets/app-icons/twsj.png';
import Merlion_News_Icon from '@assets/app-icons/merlion-news.png';
import PeachStudio_Icon from '@assets/app-icons/the-peach-studio.png';

export interface App {
    page: string,
    name: string,
    description: string,
    link: string,
    image: string,
    github?: string,
    icon_location: ImageMetadata,
    display_types: DisplayType,
}

export const apps: App[] = [
    {
        page: "travelsg",
        name: "TravelSG",
        description: "Bus Arrival Tracker. Mainly featuring Live Activity for Bus Arrival.",
        link: "https://apps.apple.com/sg/app/travel-sg/id6444826465",
        image: "/assets/travelsg/image.png",
        icon_location: TravelSG_Icon,
        display_types: {
            watch: "/assets/travelsg/watchOS.png",
            mobile: "/assets/travelsg/iOS.png",
            tablet: "/assets/travelsg/iPadOS.png",
            widget: "/assets/travelsg/widgets.png"
        } as DisplayType
    }, 
    {
        page: "twsj",
        name: "The Watch Street Journal",
        description: "News on the Apple Watch. Sourced from Google News.",
        link: "https://apps.apple.com/sg/app/the-watch-street-journal/id6450393866",
        image: "/assets/twsj/image.png",
        github: "https://github.com/Ju-Long/The-Watch-Street-Journal.git",
        icon_location: TWSJ_Icon,
        display_types: {
            watch: "/assets/twsj/watchOS.png",
        } as DisplayType
    }, 
    {
        page: "merlion-news",
        name: "Merlion News",
        description: "News of Singapore. All in one app.",
        link: "https://apps.apple.com/sg/app/merlion-news/id6451491959",
        image: "/assets/merlion-news/image.png",
        icon_location: Merlion_News_Icon,
        display_types: {
            mobile: "/assets/merlion-news/iOS.png",
            tablet: "/assets/merlion-news/iPadOS.png",
            desktop: "/assets/merlion-news/macOS.png",
        } as DisplayType
    },
    {
        page: "peach-studio",
        name: "The Peach Studio",
        description: "Workout and Fitness. By The Peach Studio",
        link: "https://peachstudio.app/",
        image: "/assets/peachstudio/Web.png",
        icon_location: PeachStudio_Icon,
        display_types: {
            web: "/assets/peachstudio/Web.png"
        } as DisplayType
    }
]
