export default function ({ member }) {
    return (
        <article className="lg:p-4 py-2 items-start flex justify-start">
            <div class="basis-1/6 self-center text-center"><span class="lg:text-2xl text-gray-600">#{member.rank}</span></div>
            <div class="grow self-center">
                <a href={`https://www.duolingo.com/profile/${member.username}`} target="_blank" rel="noreferrer">
                    <div class="flex justify-center items-center">
                        <div class="basis-1/3">
                            <img alt="Avatar of" src={member.avatar} class="w-10 h-10 lg:w-16 lg:h-16 rounded-full mx-auto" />
                        </div>
                        <div className="lg:text-xl grow">
                            {member.name}
                        </div>
                    </div>
                </a>
            </div>
            <div class="lg:basis-1/6 basis-1/4 self-center text-center">
                <span class="lg:text-2xl text-gray-600">{member.streak}</span>
            </div>
            <div class="lg:basis-1/6 basis-1/4 self-center text-center">
                <span class="lg:text-2xl text-gray-600">{member.totalXPPoints}</span>
                {/* <br />
                <span class="lg:text-xs lg:font-medium text-gray-600">{member.totalPoints}</span> */}
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