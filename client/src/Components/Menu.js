import React from "react";

export const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://myrepublica.nagariknetwork.com/uploads/media/poverty-1.jpg",
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://myrepublica.nagariknetwork.com/uploads/media/poverty-1.jpg",
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://myrepublica.nagariknetwork.com/uploads/media/poverty-1.jpg",
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://myrepublica.nagariknetwork.com/uploads/media/poverty-1.jpg",
    },
  ];

  return (
    <div className="flex-col space-y-4">
      <span className="text-xl font-bold">Other Posts you may Like</span>
      <div className="flex-col space-y-8">
        {posts.map((item) => (
          <div className="flex-col">
            <img src={item.img} className="w-full h-[200px] object-cover" />
            <p className=" font-semibold">{item.title}</p>
            <div className="items-center justify-center flex bg-slate-300 rounded-sm">
              {" "}
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
