import React from "react";
import location from "/icon-location.svg";
import twitter from "/icon-twitter.svg";
import website from "/icon-website.svg";
import company from "/icon-company.svg";

export default function Main(props) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <div className="main rounded-xl gap-5 p-12 mt-7 flex flex-col md:flex-row">
      <div className=" ">
        <img className=" w-32 rounded-full" src={props.data.avatar_url} alt="" />
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between gap-20 ">
          <h1 className=" text-3xl font-bold font-mono">
            {props.data.name ? props.data.name : ""}
          </h1>
          <h2 className=" font-mono mt-1 ">
            {props.data.created_at
              ? `Joined ${formatDate(props.data.created_at)}`
              : ""}
          </h2>
        </div>
        <a
          className="font-mono text-blue-600"
          href={
            props.data.login ? `https://github.com/${props.data.login}` : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.data.login ? `@${props.data.login}` : ""}
        </a>

        <p className=" mt-4 text-gray-400  font-mono ">
          {props.data.bio
            ? props.data.bio
            : props.data.login
            ? "This profile has no bio"
            : ""}
        </p>

        <div className=" bg-slate-100 rounded-xl p-4 mt-8">
          <div className="flex flex-col items-start text-gray-500 font-mono">
            <div className="flex gap-14 mb-2">
              <p className="w-32 text-center">Repos</p>
              <p className="w-32 text-center">Followers</p>
              <p className="w-32 text-center">Following</p>
            </div>
            <div className="flex gap-14 text-3xl font-bold text-slate-900">
              <p className="w-32 text-center">{props.data.public_repos}</p>
              <p className="w-32 text-center">{props.data.followers}</p>
              <p className="w-32 text-center">{props.data.following}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-10 mt-10">
          <div className="flex gap-5">
            <img src={location} alt="" className="max-w-full h-5" />
            <p className="font-mono">
              {props.data.location ? props.data.location : "Not Available"}
            </p>
          </div>

          <div className="flex gap-5">
            <img src={twitter} alt="" className="max-w-full h-5" />
            <p className="font-mono">
              {props.data.twitter_username
                ? props.data.twitter_username
                : "Not Available"}
            </p>
          </div>

          <div className="flex gap-5 mt-6">
            <img src={website} alt="" className="max-w-full h-5" />
            <p className="font-mono">
              {props.data.blog ? props.data.blog : "Not Available"}
            </p>
          </div>

          <div className="flex gap-5 mt-6">
            <img src={company} alt="" className="max-w-full h-5" />
            <p className="font-mono">
              {props.data.company ? props.data.company : "Not Available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
