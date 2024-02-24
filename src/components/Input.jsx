/* eslint-disable react/prop-types */
const Input = ({ urlValue, setUrlValue, handleDownload }) => {
    return (
        <>
            {/* main 1 */}
            <div className="bg-gray-900  h-96 flex justify-center items-center">
                {/* main 2  */}
                <div className="">
                    {/* text  */}
                    <h2 className=" text-center text-white text-2xl lg:text-3xl font-bold mb-3">
                        <span className="text-red-500">YouTube </span>
                        Video Downloader
                    </h2>

                    {/* Input And Button  */}
                    <div className="flex justify-center">
                        <div>
                            {/* input  */}
                            <input
                                type="text"
                                placeholder="Enter url"
                                value={urlValue}
                                onChange={(e) => setUrlValue(e.target.value)}
                                className=" bg-gray-800 px-2 py-2 w-64 lg:w-96 outline-none border border-gray-600 rounded-l-lg text-white"
                            />
                            {/* button  */}
                            <button onClick={handleDownload} type="button" className=" bg-gray-600 hover:bg-gray-500 py-2 px-5 border border-gray-600 rounded-r-lg text-white font-semibold">Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Input;
