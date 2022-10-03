import { useState, useEffect, useRef } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SendIcon from "@material-ui/icons/Send";
import firebase from "../../firebase";

const Post = ({ post, user }) => {
  return (
    <div className="post">
      <Header post={post} time={post.timestamp} />
      <PostBody body={post}  />
      <Reactions post={post} user={user}/>
    </div>
  );
};

const Header = ({ post, time }) => {
  // console.log(time.toDate());
  // console.log(time);
  return (
    <div className="post-header">
      {!post.picture ? (
        <AccountCircleIcon />
      ) : (
        <img src={post.picture} alt="photo" height="30" className="user-img" />
      )}
      <div>
        <span>{post.username}</span>
        <span>{time?.toDate().toString().split("G")[0]}</span>
      </div>
    </div>
  );
};

const PostBody = ({ body }) => {
    let totalReactions = 0;
    if(body.reactions)
    {

        for(let i in body.reactions)
        {

            totalReactions += body.reactions[""+i]
        }
    }
  return (
    <div className="post-body-wrapper">
      <div className="post-body">
        <p>{body.text}</p>
        {body.media && <img src={body.media} alt={body.media} />}
      </div>
      <div className="topReactionsContainer">
        {body.top3reactions && 
          <div>
            {body.top3reactions.map((reaction) => (
            <img
              src={`${process.env.PUBLIC_URL}/Images/${
                Object.keys(reaction)[0]
              }-128x128.png`}
              name={reaction}
              height="20"
              width="20"
              alt={reaction}
            />
            ))}
            <span className="numberOfReactions">{body.reactions && totalReactions}</span>
          </div>
        }
      </div>
    </div>
  );
};

const Reactions = ({ post, user }) => {
  const [react, setReact] = useState();
  const [comment, setComment] = useState(false);
  const [commentState, setCommentState] = useState("");

  useEffect(() => {
    setReact("");
  }, []);
  const setReaction = (e) => {
    let inc = firebase.firestore.FieldValue.increment(1);
    firebase
      .firestore()
      .collection("posts")
      .doc("" + post.timestamp.toDate())
      .update(
        {
          [`reactions.${e.target.name}`]: inc,
        },
        { merge: true }
      );
    firebase
      .firestore()
      .collection("posts")
      .doc("" + post.timestamp.toDate())
      .get()
      .then((snapshot) => {
        setReact(() => {
          let max = [];

          let post = snapshot.data();
          if (post.top3reactions) {
            max = [...post.top3reactions];

            let reactionExists = max.findIndex(
              (react) => Object.keys(react)[0] === e.target.name
            );
            if (reactionExists > -1) {
              max[reactionExists][`${e.target.name}`] += 1;
            } else {
              if (max.length < 3)
                max.push({
                  [`${e.target.name}`]: post.reactions[e.target.name],
                });
              else {
                let newMaxIndex = max.findIndex(
                  (react) =>
                    Object.values(react)[0] < post.reactions[e.target.name]
                );
                for (
                  let i = max.length - 2;
                  i >= newMaxIndex && newMaxIndex > -1;
                  i--
                ) {
                  max[i + 1] = max[i];
                }
                max[newMaxIndex] = {
                  [`${e.target.name}`]: post.reactions[e.target.name],
                };
              }
            }
          } else max[0] = { [`${e.target.name}`]: 1 };

          max = max.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);
          firebase
            .firestore()
            .collection("posts")
            .doc("" + post.timestamp.toDate())
            .update(
              {
                top3reactions: max,
              },
              { merge: true }
            );

          return e.target.name;
        });
      });
  };
  const showTopReactions = () => {
    // console.log(post.reactions)
  };
  const postComment = () => {
      firebase.firestore()
      .collection("posts")
      .doc("" + post.timestamp.toDate())
      .update(
        {
          comments: firebase.firestore.FieldValue.arrayUnion({username: user.displayName, userImg:user.photoURL, comment: commentState}),
        },
        { merge: true }
      );
      setCommentState("")
  }
  return (
    <div className="footer">
      <div className="reactions">
        <div className="topReactions">{showTopReactions()}</div>
        <div className="like-reaction">
          {react ? (
            <img
              src={`${process.env.PUBLIC_URL}/Images/` + react + `-128x128.png`}
              name="like"
              height="25"
              alt="like"
            />
          ) : (
            <ThumbUpIcon />
          )}
          <span>{react ? react : "Like"}</span>

          <div className="reaction-tray" onClick={setReaction}>
            <img
              src={`${process.env.PUBLIC_URL}/Images/like-128x128.png`}
              name="like"
              height="40"
              alt="like"
            />
            <img
              src={`${process.env.PUBLIC_URL}/Images/love-128x128.png`}
              name="love"
              height="40"
              alt="love"
            />
            <img
              src={`${process.env.PUBLIC_URL}/Images/care-128x128.png`}
              name="care"
              height="40"
              alt="care"
            />
            <img
              src={`${process.env.PUBLIC_URL}/Images/haha-128x128.png`}
              name="haha"
              height="40"
              alt="haha"
            />
            <img
              src={`${process.env.PUBLIC_URL}/Images/wow-128x128.png`}
              name="wow"
              height="40"
              alt="wow"
            />
            <img
              src={`${process.env.PUBLIC_URL}/Images/sad-128x128.png`}
              name="sad"
              height="40"
              alt="sad"
            />
            <img
              src={`${process.env.PUBLIC_URL}/Images/angry-128x128.png`}
              name="angry"
              height="40"
              alt="angry"
            />
          </div>
        </div>
        <div>
          <ChatBubbleOutlineIcon />
          <span onClick={() => setComment((state) => !state)}>Comment</span>
        </div>
        <div>
          <SendIcon />
          <span>Share</span>
        </div>
      </div>
      {comment && (
        <div className="commentBoxWrapper">
            <Comments post={post}/>
            <div className="commentBox">
                <input
                    value={commentState}
                    onInput={(e) => setCommentState(e.target.value)}
                    type="text"
                    name="comment"
                    id="comment"
                    placeholder="Add your comment..."
                />
                <SendIcon onClick={postComment} />
            </div>
        </div>
      )}
    </div>
  );
};

const Comments = ({post}) =>{
    return(
        <div className="commetsWrapper">
            {post.comments?.map((comment)=>
                <div className="commentWrapper">
                    <img src={comment.userImg} class="user-img" height={30} alt="user" />
                    <div>
                        <div className="comment">
                            <p>{comment.username}</p>
                            <p>{comment.comment}</p>
                        </div>
                        <button className="replyBtn">Reply</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Post;
