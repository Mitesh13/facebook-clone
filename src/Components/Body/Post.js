import {useState, useEffect} from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendIcon from '@material-ui/icons/Send';
import firebase from '../../firebase'

const Post = ({post}) =>{
    return(
        <div className="post">
            <Header post={post} time={post.timestamp}/>
            <PostBody body={post}/>
            <Reactions post={post}/>
            
        </div>
    )
}

const Header = ({post,time}) =>{
    // console.log(time.toDate());
    // console.log(time);
    return(
        <div className="post-header">
            {
                !post.picture ?
                <AccountCircleIcon />
                :
                <img src={post.picture} alt="photu" height="30" className="user-img"/>

            }
            <div>
                <span>{post.username}</span>
                <span>{time?.toDate().toString().split('G')[0]}</span>
            </div>     
                   
        </div>
    )
}

const PostBody = ({body}) =>{
    return(
        <div className="post-body">
            <p>{body.text}</p>
            {
                body.media &&
                <img src={body.media} alt={body.media}/>
            }
        </div>
    )
}

const Reactions = ({post}) =>{

    const [react, setReact] = useState()

    useEffect(() => {
        setReact('')
        
    }, [])
    const setReaction = (e) =>{
        // e.target.parentNode.classList.add("hide");
        // e.target.parentNode.classList.remove("hide");
        setReact(()=>{
            console.log(react)
            console.log("reacted:",post.timestamp.toDate());
            let max = []
            
            if(post.top3reactions)
            {
                console.log("in top 3")
                max = [...post.top3reactions]


                for(var key in post.reactions)
                {
                    console.log(key,post.reactions[key])
                    console.log("0: ",post.reactions[post.top3reactions[0]])    
                    console.log("1: ",post.reactions[post.top3reactions[1]])    
                    console.log("2: ",post.reactions[post.top3reactions[2]])    
                    if(post.reactions[key] > post.reactions[post.top3reactions[0]])
                    {
                        console.log("max0:",post.reactions[key])
                        max[0] = key
                    } 
                    else if((!post.top3reactions[1]) || (post.reactions[key] > post.reactions[post.top3reactions[1]]))
                    {
                        console.log("max1:",post.reactions[key])
                        max[1] = key
                    } 
                    else if((!post.top3reactions[2]) || (post.reactions[key] > post.reactions[post.top3reactions[2]]))
                    {
                        console.log("max2:",post.reactions[key])
                        max[2] = key
                    } 
                }
            }
            else
                max[0] = e.target.name
            let inc = firebase.firestore.FieldValue.increment(1)
            firebase.firestore().collection('posts').doc(""+post.timestamp.toDate()).update({
                reacted: e.target.name,
                top3reactions: max,
                [`reactions.${e.target.name}`]: inc
            },{merge:true})

            return e.target.name
        })

        
    }
    const showTopReactions = () =>{
        
        // console.log(post.reactions)
    }
    return(
        <div className="reactions">
            <div className="topReactions">
                {showTopReactions()}
            </div>
            <div className="like-reaction">
                {
                    react ? 
                        <img src={"/Images/"+post.reacted+"-128x128.png"} name="like" height="25" alt="like"/>
                        :
                        <ThumbUpIcon />

                }
                <span>{react ? post.reacted : "Like"}</span>

                <div className="reaction-tray" onClick={setReaction}>
                    <img src="/Images/like-128x128.png" name="like" height="40" alt="like"/>
                    <img src="/Images/love-128x128.png" name="love" height="40" alt="love" />
                    <img src="/Images/care-128x128.png" name="care" height="40" alt="care" />
                    <img src="/Images/haha-128x128.png" name="haha" height="40" alt="haha" />
                    <img src="/Images/wow-128x128.png" name="wow" height="40" alt="wow" />
                    <img src="/Images/sad-128x128.png" name="sad" height="40" alt="sad" />
                    <img src="/Images/angry-128x128.png" name="angry" height="40" alt="angry" />
                    {/* <ThumbUpIcon />
                    <FavoriteRoundedIcon/> */}
                </div>
            </div>
            <div>
                <ChatBubbleOutlineIcon />
                <span>Comment</span>
            </div>
            <div>
                <SendIcon />
                <span>Share</span>
            </div>
        </div>
    )
}

export default Post