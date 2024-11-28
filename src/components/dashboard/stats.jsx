export default function Stats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow dark:bg-dmode border-2 border-black ">
                <h3 className="text-sm text-gray-500">Total Posts</h3>
                <p className="text-2xl font-bold">120</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow dark:bg-dmode">
                <h3 className="text-sm text-gray-500">Total Views</h3>
                <p className="text-2xl font-bold">32,400</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow dark:bg-dmode">
                <h3 className="text-sm text-gray-500">New Subscribers</h3>
                <p className="text-2xl font-bold">56</p>
            </div>
        </div>
    );
}
