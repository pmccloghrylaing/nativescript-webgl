import { CanvasView } from 'nativescript-webgl';
import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';

import { HelloWorldModel } from './main-view-model';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    let page = args.object as Page;

    page.getViewById<CanvasView>('cv');
    page.bindingContext = new HelloWorldModel();
}
