export default function ({ member }) {
    return (
        <article className="p-4 sm:p-6 lg:p-4 xl:p-6 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 flex justify-start">
            <div class="basis-1/6 self-center text-center"><span class="text-2xl font-medium text-gray-600">#{member.rank}</span></div>
            <div class="basis-full">
                <a href={`https://www.duolingo.com/profile/${member.username}`} target="_blank" rel="noreferrer">
                    <div class="flex justify-center items-center">
                        <div class="basis-1/4">
                            <img alt="Avatar of" src={member.avatar} class="w-16 h-16 rounded-full mx-auto" />
                        </div>
                        <div className="text-xl font-medium flex-1 min-w-0">
                            <span class="inline-block align-baseline">{member.name}</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="basis-1/6 self-center text-center">
                <span class="text-2xl font-medium text-gray-600">{member.streak}</span>
            </div>
            <div class="basis-1/6 self-center text-center">
                <span class="text-2xl font-medium text-gray-600">{member.totalXPPoints}</span><br/>
                <span class="text-xs font-medium text-gray-600">{member.totalPoints}</span>
            </div>
            {/* <ul>
                {member.points.map(point => (
                    <li key={point.date}>
                        <p>{point.readableDate} - {point.gainedXp}</p>
                    </li>
                ))}
            </ul> */}
        </article>
    );
}