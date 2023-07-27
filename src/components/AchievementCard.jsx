export default function AchievementCard({
  contest,
  location,
  date,
  award,
  coach1,
  coach2,
  member1,
  member2,
  member3,
}) {
  // configure theme here
  var gradientColour = "";
  // eslint-disable-next-line
  if (award.toUpperCase().trim() == "gold".toUpperCase().trim()) {
    gradientColour = "from-yellow-500 via-yellow-300 to-yellow-100";
    // eslint-disable-next-line
  } else if (
    award.toUpperCase().trim() === "silver medal".toUpperCase().trim()
  ) {
    gradientColour = "from-gray-400 via-gray-200 to-gray-100";
    // eslint-disable-next-line
  } else if (award.toUpperCase().trim() == "bronze".toUpperCase().trim()) {
    gradientColour = "from-amber-600 via-amber-500 to-amber-400";
  } else {
    gradientColour = "from-green-300 via-green-200 to-green-100";
  }

  return (
    <>
      <div className="items-center justify-center hover:-translate-y-2 ease-in-out duration-300">
        <div
          className={`h-full w-full rounded-md bg-gradient-to-br ${gradientColour} p-1`}
        >
          <div className="h-full w-full rounded bg-transparent">
            <div className="justify-start p-8">
              <div className="basis-3/3">
                <div className="text-2xl font-bold text-black drop-shadow-lg text-left">
                  {contest}
                </div>
                <div className="grid grid-cols-2">
                  <p className="w-full h-full text-left font-semibold text-gray-500">
                    {date+ ", " + location}
                  </p>
                  <p className="w-full h-full text-right font-semibold text-gray-500">
                    {award}
                  </p>
                </div>
                <div className="mt-4">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-5 shadow rounded-lg outline-gray-500 outline-dashed">
                      <div className="grid w-full h-full place-items-center font-bold">
                        Coach
                      </div>
                    </div>
                    <div className="col-span-7 shadow rounded-lg outline-gray-500 outline-dashed">
                      <div className="grid w-full h-full place-items-start mx-3 font-semibold text-gray-500">
                        <p className="pt-1">{coach1}</p>
                        <p className="py-1">{coach2}</p>
                      </div>
                    </div>

                    <div className="col-span-5 shadow rounded-lg outline-gray-500 outline-dashed">
                      <div className="grid w-full h-full place-items-center font-bold">
                        Team
                      </div>
                    </div>

                    <div className="col-span-7 shadow rounded-lg outline-gray-500 outline-dashed">
                      <div className="grid w-full h-full place-items-start mx-3 font-semibold text-gray-500">
                        <p className="pt-1">{member1}</p>
                        <p className="pt-1">{member2}</p>
                        <p className="py-1">{member3}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
