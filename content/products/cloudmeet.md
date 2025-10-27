---
title: CloudMeet
description: Video conferencing SaaS
tags: 
  - product
---
Video conferencing SaaS

> [!error] Status: Defunct

CloudMeet is a SaaS video conferencing platform that originated as a spin-off from [Ritech](https://www.ritech.co), where I served as a senior engineer for three years.

## The beginning

One client needed video conferencing integrated into their dashboards. Not standalone tools. Not another Zoom clone. Something they could embed into their own products for custom presentation workflows.

I worked with two other senior engineers who were the best at their craft. Our mission was simple: spin up a video conferencing platform as an intrapreneurship inside Ritech. Serve this client first. Get to market quickly. Make it work. Expand beyond that use case.

We iterated with the designer. Our job was to craft the front-end and the video service architecture in record time.

## The result

CloudMeet became a multi-tenant SaaS with three distinct roles: Host, Moderator, and Attendees. The app was designed to be integrated into client dashboards.

We had to handle three main use cases:
- Small rooms up to 6 people using P2P
- Large rooms up to 100 people using MCU
- Session streaming

Plus session recording. Plus real-time chat between participants, moderators, and hosts.

## The challenges

Building three different use cases without drowning in technical debt was the first challenge. P2P for small groups. MCU for large ones. Streaming for sessions. Each needed its own approach but had to share the same codebase.

We needed everything to feel real-time. No lag. No delays. Video conferencing lives or dies on latency.

We had to make it easy to build new features into the presentation experience. Extensibility without complexity.

And we had to keep costs low. Server resources aren't free, especially when you're mixing and forwarding video streams for 100 concurrent users.

## The architecture

We split it into six components. Each developed and tested individually.
- **API** - The backend. Built on .NET using Domain-Driven Design.
- **Client** - An iframe testing environment where we could prototype integrations.
- **Infrastructure** - Terraform modules. Everything deployed on AWS: Cognito, S3, SQS, ECS Fargate, RDS.
- **Web** - Two React applications. One for the video experience, one for the dashboard. Built as a Lerna monorepo with Storybook for component development. Redux for state management.
- **Lambdas** - Helper async functions that ran in the background.
- **The Video Stack** - This is where it got interesting. We used Jitsi. JaaS for the service layer. Jitsi SDK for WebRTC on the client. Jibri for recording and streaming. Custom Jitsi Meet interface for the user experience.

### MCU vs SFU

Early on, we had to choose between MCU and SFU architectures.

MCU mixes multiple streams into one on the server. Low client load. High server load. Good for devices with limited resources.

SFU forwards individual streams to each participant. High client load. Low server load. Better for scaling large groups.

We ended up using MCU for our large rooms. The tradeoff was worth it. More server CPU but consistent experience across all devices.

## The tech stack

- Azure DevOps for CI with Azure Pipelines. Repo, registry, and project management all in one place.
- React with Redux for the frontend.
- AWS for infrastructure. XRay for tracing. The usual suspects for services.
- .NET Core with Entity Framework on the backend.
- Firestore for real-time notes and chat. React for everything users touched.
- Jitsi for the video layer. Open source. Customizable. Fast to integrate.

## The lessons

This was intrapreneurship. We had the backing of Ritech but the speed of a startup. The pressure to ship was real. The need to get it right was real.

I learned that architecture matters most when you're moving fast. We built six distinct components. If we'd made them all talk to each other directly, we'd have been stuck. The boundaries let us move and work on different pieces independently.

I learned that WebRTC is powerful but unforgiving. You can't fake latency. You can't hide bad network conditions. You either build it right or users feel every millisecond of lag.

I learned that "capable of hosting 100 users concurrently" sounds simple until you're actually doing it. Then you're optimizing stream forwarding, managing server resources, and testing under load.

But mostly I learned that the best projects are the ones where you're figuring it out as you go. Where you're of the first members. Where the architecture is still being sketched on whiteboards.
