import { Tooltip } from "flowbite-react";

export default function MemberItem({ member }) {
    return (
        <article className="lg:p-4 py-2 items-start flex justify-start">
            <div className="basis-1/6 self-center text-center"><span className="lg:text-xl text-gray-600">#{member.rank}</span></div>
            <div className="basis-full grow self-center">
                <a href={`https://www.duolingo.com/profile/${member.username}`} target="_blank" rel="noreferrer">
                    <div className="flex justify-center items-center">
                        <div className="basis-1/3">
                            <img alt="Avatar of" src={member.avatar} className="w-10 h-10 lg:w-16 lg:h-16 rounded-full mx-auto" />
                        </div>
                        <div className="lg:text-xl grow">
                            {member.name}
                        </div>
                    </div>
                </a>
            </div>
            <div className="lg:basis-1/6 basis-1/5 self-center text-center">
                <span className="lg:text-xl text-gray-600">{member.streak}</span>
            </div>
            <div className="lg:basis-1/6 basis-1/5 self-center text-center">
                <Tooltip
                    content={`Duo points: ${member.totalXPPoints}`}
                    placement="bottom"
                >
                    <span className="lg:text-xl text-gray-600">{member.totalPoints}</span>
                </Tooltip>
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