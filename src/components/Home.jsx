import React from 'react'
import VideoCard from './VideoCard'

const Home = () => {
    return (
        <div className='flex flex-1 flex-wrap justify-center gap-[6px] sm:gap-4 w-full'>
            {/* sm:p-2 mt-[6px] p-[1px] sm:mt-0 */}
            <VideoCard thumbnail='/nodejs.jpeg' title='Its a lecture on node js with mongodb aggregation pipeline' channel='MongoDb' views='2k' timestamp='2 days ago' />
            <VideoCard thumbnail='/university-lib.jpeg' title='title' channel='channel' views='views' timestamp='timestamp' /><VideoCard thumbnail='/university-lib.jpeg' title='title' channel='channel' views='views' timestamp='timestamp' /><VideoCard thumbnail='/university-lib.jpeg' title='title' channel='channel' views='views' timestamp='timestamp' /><VideoCard thumbnail='/university-lib.jpeg' title='title' channel='channel' views='views' timestamp='timestamp' /><VideoCard thumbnail='/university-lib.jpeg' title='title' channel='channel' views='views' timestamp='timestamp' /><VideoCard thumbnail='/university-lib.jpeg' title='title' channel='channel' views='views' timestamp='timestamp' /><VideoCard thumbnail='/university-lib.jpeg' title='title' channel='channel' views='views' timestamp='timestamp' /><VideoCard thumbnail='/university-lib.jpeg' title='title' channel='channel' views='views' timestamp='timestamp' /><VideoCard thumbnail='/university-lib.jpeg' title='title' channel='channel' views='views' timestamp='timestamp' /><VideoCard thumbnail='/university-lib.jpeg' title='title' channel='channel' views='views' timestamp='timestamp' /><VideoCard thumbnail='/university-lib.jpeg' title='title' channel='channel' views='views' timestamp='timestamp' />
        </div>
    )
}

export default Home