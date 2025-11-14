import { useParams, Link } from "react-router-dom";
import Post from "../components/Post";
import PostCard from "../components/PostCard";
import postsData from "../data/posts.json";

const PostPage = () => {
  const { id } = useParams();
  const post = postsData.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Post não encontrado
        </h2>
        <Link
          to="/"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Voltar para Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold mb-12 group transition"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Voltar para Home
        </Link>

        <Post post={post} />

        {/* Outros posts relacionados */}
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Continue Lendo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {postsData
              .filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((otherPost) => (
                <PostCard key={otherPost.id} post={otherPost} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
