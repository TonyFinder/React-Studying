import {addPost, ProfilePagePropsType} from '../../../Redux/profile_reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/redux-store';
import {Dispatch} from 'redux';
import {getProfilePage} from '../../../Redux/users-selectors';

type MapToStatePropsType = {
    profilePage: ProfilePagePropsType
}
type MapToDispatchPropsType = {
    addPost: (value: string) => void
}
export type MyPostsPropsType = MapToStatePropsType & MapToDispatchPropsType

let MapToStateProps = (state: AppStateType): MapToStatePropsType => ({
        profilePage: getProfilePage(state)
})
let MapToDispatchProps = (dispatch: Dispatch) => ({
        addPost: (newPost: string) => dispatch(addPost(newPost))
})

export const MyPostsContainer = connect(MapToStateProps, MapToDispatchProps)(MyPosts)

export default MyPostsContainer;