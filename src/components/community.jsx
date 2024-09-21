export default function Community(){
    const cardsArray = [
        {
            src:"community1",
            title:"Membership Organisations",
            text:"Our membership management software provides full automation of membership renewals and payments",
        },
        {
            src:"community2",
            title:"National Associations",
            text:"Our membership management software provides full automation of membership renewals and payments",
        },
        {
            src:"community3",
            title:"Clubs And Groups",
            text:"Our membership management software provides full automation of membership renewals and payments",
        }
    ]

    return(
        <div className="flex justify-between items-center px-52">
                {cardsArray.map((card,c) =>
                   <div key={c} className="flex flex-col justify-between items-center py-4 px-8 rounded-App gap-1.5 shadow-sm max-w-52 text-center">
                  <img src={`./${card.src}.svg`} alt={`${card.src}`}/>
                  <span className="text-3xl font-bold ">{`${card.title}`}</span>
                  <p className="text-[10px] text-Hero-ligth-gray min-w-44">{`${card.text}`}</p>
                  </div>
                )}
        </div>
    )
}