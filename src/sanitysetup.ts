// sanity.js
import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

// const dateY = new Date().getUTCFullYear();
// const dateM = new Date().getUTCMonth()%100;
// const dateD = new Date().getUTCDate()%100;
// console.log(`${dateY}-${dateM}-${dateD}`);

export const client = createClient({
  projectId: "4kwemqxk",
  dataset: "production",
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: `2023-01-08`, // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq

export async function getProjects() {
  let projects;
  try {
    projects = await client.fetch(`*[_type=="project"]{
    _id, title, professional, Summary, description, githuburl,
    techstack[]->{skill}
  }`);
  
} catch (error) {
  console.log("Error Fetching Projects");
}
return projects as project[];
}

export async function getBio() {
  let biography: bio[];
  try {
    biography = await client.fetch(`*[_type=="bio"]`)
    return biography[0] as bio;
  } catch (error) {
    console.log("Error fetching Biography");
  }
  return null;
}

export type project = {
  _id:string,
  title:string,
  professional:boolean,
  description: string,
  Summary:string,
  githuburl:string,
  techstack:tech[]
}

type tech = {
  skill: string
}

export type bio = {
_id:string,
  title:string,
  Name: string,
  Description: string,
  Summary:string,
}
