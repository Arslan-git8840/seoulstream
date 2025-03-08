import HistoryCard from "./HistoryCard";

const AccountPage = () => {
    const videos = [
        {
            thumbnail: '/nodejs.jpeg',
            title: 'Exploring the Universe: A Journey Through Space',
            channelName: 'SpaceXplorers',
            views: '1.2M',
            duration: '12:45',
        },
        {
            thumbnail: '/nodejs.jpeg',
            title: 'The Art of Cooking: Mastering Italian Cuisine',
            channelName: 'ChefDelight',
            views: '850K',
            duration: '9:30',
        },
        {
            thumbnail: '/nodejs.jpeg',
            title: 'Tech Trends 2025: What’s Next?',
            channelName: 'TechInsider',
            views: '2M',
            duration: '15:20',
        },
        {
            thumbnail: '/nodejs.jpeg',
            title: 'Exploring the Universe: A Journey Through Space',
            channelName: 'SpaceXplorers',
            views: '1.2M',
            duration: '12:45',
        },
        {
            thumbnail: '/nodejs.jpeg',
            title: 'The Art of Cooking: Mastering Italian Cuisine',
            channelName: 'ChefDelight',
            views: '850K',
            duration: '9:30',
        },
        {
            thumbnail: '/nodejs.jpeg',
            title: 'Tech Trends 2025: What’s Next?',
            channelName: 'TechInsider',
            views: '2M',
            duration: '15:20',
        }, {
            thumbnail: '/nodejs.jpeg',
            title: 'Exploring the Universe: A Journey Through Space',
            channelName: 'SpaceXplorers',
            views: '1.2M',
            duration: '12:45',
        },
        {
            thumbnail: '/nodejs.jpeg',
            title: 'The Art of Cooking: Mastering Italian Cuisine',
            channelName: 'ChefDelight',
            views: '850K',
            duration: '9:30',
        },
        {
            thumbnail: '/nodejs.jpeg',
            title: 'Tech Trends 2025: What’s Next?',
            channelName: 'TechInsider',
            views: '2M',
            duration: '15:20',
        }, {
            thumbnail: '/nodejs.jpeg',
            title: 'Exploring the Universe: A Journey Through Space',
            channelName: 'SpaceXplorers',
            views: '1.2M',
            duration: '12:45',
        },
        {
            thumbnail: '/nodejs.jpeg',
            title: 'The Art of Cooking: Mastering Italian Cuisine',
            channelName: 'ChefDelight',
            views: '850K',
            duration: '9:30',
        },
        {
            thumbnail: '/nodejs.jpeg',
            title: 'Tech Trends 2025: What’s Next?',
            channelName: 'TechInsider',
            views: '2M',
            duration: '15:20',
        },
    ];

    return (
        <div className=" dark:bg-[#0C0E10] rounded-2xl">
            <div className="flex-1 flex flex-col gap-2 dark:bg-[#0C0E10] bg-white rounded-2xl">
                {videos.map((video, index) => (
                    <HistoryCard key={index} video={video} />
                ))}
            </div>
        </div>
    );
};

export default AccountPage;