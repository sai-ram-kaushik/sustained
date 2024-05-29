"use client";

import data from "../../data/advisory-committee.json";

const AdvisoryCommittee = () => {

    const {
        advisoryCommittee
    } = data;

    return (
        <div className="px-5 lg:px-10 py-10">
            <div className="container mx-auto">
                <div className="flex items-center justify-center mt-5 gap-5">
                    <h3 className={`text-secondary `} >Advisory Committee</h3>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 mt-5">
                    {advisoryCommittee.data.map((list, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <p className="text-lg text-center font-unbounded">
                                {list.name},
                            </p>
                            <p className="text-center text-secondary">{list.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )

}

export default AdvisoryCommittee;