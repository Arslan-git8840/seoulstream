import PlaylistCard from "@/components/PlaylistCard";

const Page = () => {
    const playlists = [
      { thumbnail: '/nodejs.jpeg', title: 'Top JavaScript Tutorials', channelName: 'CodeMaster', videoCount: 12 },
      { thumbnail: '/nodejs.jpeg', title: 'Mastering React.js', channelName: 'ReactPro', videoCount: 15 },
      { thumbnail: '/nodejs.jpeg', title: 'Node.js for Beginners', channelName: 'NodeGuru', videoCount: 10 },
      { thumbnail: '/nodejs.jpeg', title: 'Advanced JavaScript Concepts', channelName: 'JSExpert', videoCount: 18 },
      { thumbnail: '/nodejs.jpeg', title: 'Building APIs with Node.js', channelName: 'APIWizard', videoCount: 14 },
      { thumbnail: '/nodejs.jpeg', title: 'Full-Stack Development with JavaScript', channelName: 'FullStackDev', videoCount: 20 },
    ];
  
    return (
      <div className="sm:p-4 p-1 dark:bg-[#0C0E10] rounded-2xl">
        {/* <h1 className="text-lg font-bold mb-4">Playlists</h1> */}
        <div className="flex-1 flex justify-center flex-wrap sm:gap-2 gap-1">
          {playlists.map((playlist, index) => (
            <PlaylistCard key={index} playlist={playlist} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Page;