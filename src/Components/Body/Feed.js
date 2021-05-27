import {useState, useEffect, useRef} from 'react'
import Post from './Post'
import firebase from '../../firebase'

import img1 from '../Images/1.jpg'
import img2 from '../Images/2.jpg'
import img3 from '../Images/3.jpg'
import img4 from '../Images/4.jpg'
import img5 from '../Images/5.jpg'

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SendIcon from '@material-ui/icons/Send';

import './feed.css'


const Feed = ({user}) => {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    const [limit, setLimit] = useState(2)

    let totalPosts = 0
        
    useEffect(() => {
        console.log("called effect");
        firebase.firestore().collection('posts').get().then((snapshot)=>{
            // console.log(snapshot.docs.length);
            totalPosts = snapshot.docs.length
            console.log(totalPosts);
        })
    }, [])
    useEffect(()=>{
        // console.log("called");
        
        const firebaseRef = firebase.firestore().collection('posts').orderBy("timestamp", "desc").limit(limit)
        firebaseRef.onSnapshot(snapshot=>{
            // console.log(snapshot.docs[0].data());
            setPosts(()=>snapshot.docs)
            setIsLoading(false)
            setIsLoadingMore(()=>false)
        }) 
        
    },[limit])

    const loadMore = () =>{
        // console.log(e.target.scrollHeight)
        let id;
        
        return function(e) {
            
            if(!id)
            {
                // console.log("called");    
                id = setTimeout(()=>{
                    console.log(e.target.scrollTop + e.target.clientHeight)
                    if(e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight)
                    {
                        console.log(totalPosts,posts.length);
                        if(totalPosts!==posts.length)
                        {
                            setLimit(prev=>prev+5)
                            setIsLoadingMore(()=>true)    
                        }
                        
                    }
                    id = null
                },400)
            }
        }
         
    }

    return (
        <div className="feed" onScroll={loadMore()}>
            <Stories />
            <Upload user={user}/>
            
            {
            
                !isLoading ?
                
                <Posts posts={posts} isLoadingMore={isLoadingMore}/>        
                
                :
                <Loading />
                
            }
        </div>
    )
}

const Loading = () =>{
    return(
        <div className="loading"></div>
    )
}

const Stories = () =>{
    return(
        <div className="stories">
            <div><img src={img1} alt="Story"/><span>Yagnesh Patil</span></div>
            <div><img src={img2} alt=""/><span>Shivam Shukla</span></div>
            <div><img src={img3} alt=""/><span>Aditya chaudhari</span></div>
            <div><img src={img4} alt=""/><span>Mehul Prajapati</span></div>
            <div><img src={img5} alt=""/><span>Keyur Patel</span></div>
        </div>
    )
}



const Upload = ({user}) =>{

    const body = useRef('')
    const media = useRef('')
    
    const addPost = () =>{
        
        firebase.firestore().collection('posts').doc(""+new Date()).set({
            // likes: ,
            media: media.current.value,
            text: body.current.value,
            username: user.displayName,
            picture: user.photoURL,
            timestamp: firebase.firestore.Timestamp.fromDate(new Date())    
        },{merge:true})
        media.current.value = ''
        body.current.value = ''
    }

    return(
        <div className="upload">
            <div className="upload-form">
                {/* <AccountCircleIcon /> */}
                <img src={user.photoURL} alt="photu" height="30" className="user-img"/>

                <input ref={body} type="text" placeholder="Whats on your mind?"/>
                <input ref={media} type="text" placeholder="Image/GIF URL"/>
                <SendIcon onClick={addPost}/>
            </div>
            <hr style={{margin:"0 auto"}}/>
            <div className="upload-other">
                <div>
                    <VideocamIcon style={{color:"red"}}/>
                    <span>Live Video</span>
                </div>
                <div>
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <span>Photo/Video</span>
                </div>
                <div>
                    <EmojiEmotionsIcon style={{color:"yellow"}}/>
                    <span>Feeling/Activity</span>
                </div>
            </div>
        </div>
    )
}

const Posts = ({posts, isLoadingMore}) =>{
    
        
    
    
    return(
            <div className="posts">
            {
                posts.map(post=><Post key={post.id} post={post.data()}/>)
            
            }
            {
                isLoadingMore &&
                <Loading /> 
                
                
            }
            </div>
        
    )
}

export default Feed