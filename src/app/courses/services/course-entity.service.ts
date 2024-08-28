import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Course } from "../model/course";
import { Injectable } from "@angular/core";


@Injectable()
export class CourseEntityService extends EntityCollectionServiceBase<Course> {

    constructor(servericeElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Course', servericeElementsFactory);

    }

}