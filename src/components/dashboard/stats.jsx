export default function Stats({ data }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="  p-4 rounded-lg shadow  border-black bg-gradient-to-r from-neutral-300 to-stone-400 ">
                <h3 className="text-lg font-bold text-gray-500 ">Total Posts</h3>
                <p className="text-2xl font-bold">{data.totalBlogs || "0"}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow bg-gradient-to-r from-neutral-300 to-stone-400">
                <h3 className="text-lg font-bold text-gray-500">Published Blogs</h3>
                <p className="text-2xl font-bold">{data.publishBlogs || "0"}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow bg-gradient-to-r from-neutral-300 to-stone-400">
                <h3 className="text-lg font-bold text-gray-500">Draft Blogs</h3>
                <p className="text-2xl font-bold">{data.totalBlogs || "0"}</p>
            </div>
        </div>
    );
}
