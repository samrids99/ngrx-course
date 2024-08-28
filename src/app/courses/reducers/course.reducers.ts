import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { compareCourses, Course } from "../model/course";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { allCoursesLoaded } from "../course.actions";


export interface CoursesState extends EntityState<Course> { // allows us to easily save entities in the store
    allCoursesLoaded: boolean; 
}

export const adapter = createEntityAdapter<Course>({ 
    sortComparer: compareCourses,
    selectId: course => course.id // allows us to select the id of the entity if we had a different id property name (e.g. courseId)
}); // utility to enable easier manipulation of entities in the store

export const initialCoursesState = adapter.getInitialState({
    allCoursesLoaded: false
});

export const coursesReducer = createReducer(
    initialCoursesState,
    on(CourseActions.allCoursesLoaded, (state, action) => adapter.addMany(action.courses, {...state, allCoursesLoaded: true}) ),
    on(CourseActions.courseUpdated, (state, action) => adapter.updateOne(action.update, state) )
);


export const {selectAll} = adapter.getSelectors();
