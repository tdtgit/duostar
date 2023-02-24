export default function Note() {
    const isWeekend = () => {
        const today = new Date(
            new Date().toLocaleString('en-US', { timeZone: "Asia/Ho_Chi_Minh" })
        );
        const day = today.getDay();
        const hour = today.getHours();
        return (day === 0 && hour >= 21) || (day === 1 && hour < 10);
    };

    return (
        isWeekend() ? (
            <div className="container mx-auto md:p-0 p-4 md:mt-8">
                <div className="md:w-250 w-auto mx-auto">
                    <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
                        <div className="flex items-center">
                            <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Info</span>
                            <h3 className="text-lg font-medium">Freeze time!</h3>
                        </div>
                        <div className="mt-2 mb-2 text-sm">
                            From 10pm Sunday to 10am Monday, the leaderboard will be frozen. This is to make the progress is a little more enjoyable and push you to keep learning.
                        </div>
                    </div>
                </div>
            </div>
        ) : null
    )
}
