import User from "../model/user.model";
import { v2 as cloundinary } from "cloudinary";
import Post from "../model/post.model.js";

export const createPost = async (req, res) => {
  try {
    const { text } = req.body;
    let { Img } = req.body;
    const userId = req.user._id.toString();

    const user = await User.findById(userId);
    if (!user) {
      res.status(400).json({ message: "User not found" });
    }

    if (!text && !Img) {
      res.status(400).json({ message: "Post must have text or img" });
    }

    if (Img) {
      const uploadRespose = await cloundinary.uploader.upload(Img);
      Img = uploadRespose.secure_url;
    }

    const newPost = new Post({
      user: user._id,
      text,
      Img,
    });

    await newPost.save();
    res.status(200).json({ message: "Post created Successfully" });
  } catch (error) {
    console.log("Error in createPost Controller ", error.message);
    res.status(400).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { post } = await Post.findById(req.params.id);

    if (!post) {
      res.status(404).json({ message: "Post not found" });
    }

    if (post.user.toString() !== req.user._id.toString()) {
      res
        .status(404)
        .json({ message: "You are not authroized to delete this post" });
    }

    if (post.Img) {
      const imgId = post.Img.split("/").pop().split(".")[0];
      await cloundinary.uploader.destroy(imgId);
    }

    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log("Error in deletePost Controller", error.message);
    res.status(400).json({ message: error.message });
  }
};

export const commentOnPost = async (req, res) => {
  try {
    const { text } = req.body;
    const postId = req.params.id;
    const userId = req.user._id;

    if (!text) {
      res.status(404).json({ message: "Text field is required" });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const comment = { user: userId, text };

    post.comments.push(comment);
    await post.save();

    res.status(200).json(post);
  } catch (error) {
    console.log("Error in commentOnPost controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const likeUnlikePost = async (req,res) => {
  try {
    const userId = req.user._id;
    const {id: postId} = req.params;
  } catch (error) {
    
  }
};