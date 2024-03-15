import { Textarea } from "keep-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BLOG_DETAILS_API_REQUEST } from "../../apiRequest/API";
import BlogSkeleton from "../common/BlogSkeleton";
import BlogSidebar from "./BlogSidebar";

const BlogDetails = () => {
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const result = await BLOG_DETAILS_API_REQUEST(id);
      setBlogs(result);
    })();
  }, [id]);

  return (
    <>
      {blogs.length === 0 ? (
        <BlogSkeleton />
      ) : (
        <div className="py-20 px-5 md:px-16 bg-[#f8f8fa]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="col-span-2">
              <div className="p-5 bg-white rounded-md">
                <h1 className="text-4xl text-black pb-3">{blogs.title}</h1>
                <div className="flex gap-3 pb-3 items-center">
                  <img
                    src={blogs.thumbnail}
                    alt=""
                    className="rounded-full w-10 h-10 ring-2"
                  />
                  <span>{blogs.createdAt}</span>
                </div>
                <img src={blogs.thumbnail} alt="" className="w-full pb-3" />
                <p className="text-slate-600">{blogs.description}</p>
              </div>
              {/* author */}
              {/* <div className="grid grid-cols-3 my-5 bg-white p-5 gap-5 rounded-md">
                <img src={blogs.thumbnail} alt="" />
                <div className="col-span-2">
                  <h1 className="text-black text-xl">{blogs.author}</h1>
                  <p className="pb-5 text-black ">
                    how to hide a div and when hover then show div content
                    tailwind
                  </p>
                  <Button size="xs" type="outlinePrimary">
                    View All Posts
                  </Button>
                </div>
              </div> */}
              {/* comments */}
              <div className=" my-5 bg-white p-5 rounded-md">
                <h1>Write a Comment</h1>
                <br />
                <form action="">
                  <Textarea
                    id="comment"
                    placeholder="Leave a comment..."
                    rows={4}
                  ></Textarea>
                  <div className="pt-5">
                    <button className="btn bg-sky-500 hover:bg-sky-700 border-none text-white">
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="">
              <h1 className="bg-green-500 rounded p-2 text-white mb-3">You may like</h1>
              <BlogSidebar />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
