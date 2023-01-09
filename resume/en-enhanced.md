# Xhin Liang
## Senior software engineer

> ✉️ <x@xhinliang.com>  
> 🇨🇳 [xhinliang.com/resume/cn-enhanced](/resume/cn-enhanced)  
> 📱 (+86)18537903271


------

### Profile {#profile}

Senior software engineer with a wide range of interests, focusing on backend development and distributed systems.

------

### Skills {#skills}

* Backend Deployment
  : Proficient in backend deployment, familiar with the operating system, RDBMS, distributed system, and computer networking.

* Frontend Deployment
  : Understand mobile and web development, mastered the ability to troubleshoot issues from interface to database.

* Project Management
  : Well Capable in project management with a strong sense of responsibility, skilled at writing and communicating.

-------

### Tech Stacks {#techstack}

1. Java / Go
2. Netty / Guava / JUC
3. TCP / HTTP / WebSocket
4. MySQL / Redis / Memcached
5. ZooKeeper / Kafka / gRPC
6. Linux / macOS / Kubernetes

------

### Experiences {#experience}

Shopee
: *Expert Backend Engineer, Employee*
  __2021.12-Now__
  Backend engineer, supporting video and content search;  
  The lead of content search backend and frontend.

Kuaishou
: *Senior Backend Engineer, Employee*
  __2018.1-2021.12__
  Backend engineer of server platform, building the most dramatic and largest live-streaming platform in the world;  
  Architect of serial foundational features such as signaling frameworks, cover storage, long-connection networking, and CDN scheduling;  
  Stability PIC of several substantial events, supporting Spring Festival, National Day, and Promotion Night;  
  Technical speaker, bravo of the department, continuous outstanding performance employee.

Tencent
: *Fullstack Engineer, Intern & Employee*
  __2016.-2018.1__
  Backend engineer of the monitor platform and content-publishing system; Mobile engineer of the MOKA app.

Xidian University
: *Informatics Engineering, Bachelor*
  __2013.8-2017.7__
  Winner of the National Encouragement Scholarship; Outstanding graduate of the college.

-----

### Highlights {#highlight}


Tracing & Logging Optimization
:  
  __Shopee__
  Designed and built the tracing flow from the frontend to all of the backend micro-services, which support sample tracing, and whitelist tracing.  
  Extended the existing RPC framework to pass-through trace-id and several common fields automatically;  
  Remastered the clients of databases and caches to support span reporting;  
  Wrote lots of backend components like rate-logging, custom RPC header, error reporting, etc.

Sharding Framework
:  
  __Kuaishou__
  Kuaishou provides a live-streaming platform that supports over 400k broadcasting rooms concurrently;  
  Each broadcasting room has its business data or flows to processes, such as watching user lists, online counts, or some interactive games based on live-streaming;  
  We designed a framework using ZooKeeper and gRPC, the core concept of this framework is just like MapReduce;  
  This framework helps us apply any business logic to each broadcasting room, and scale up or down automatically according to the number of process nodes.

Signaling Framework
:  
  __Kuaishou__
  According to the protocol and broadcasting model of the live-streaming long-connection server, we built several frameworks which totally decouple it from the business.  
  The signaling framework supports different styles of business by using different strategies, including time-series, state-sync, global-notify, etc.  
  All of them are widely used and obviously improve development efficiency.

Karthas
:  
  __Kuaishou__
  As a part-time developer, I joined the infra team and built a JVM tool independently called Karthas which is based on Arthas;  
  Based on Arthas, Karthas support more effective functions to use, such as web-console, initial-script, and the killer feature called MVEL;
  Relying on MVEL, we can call any method of our application conveniently. Open-sourced version in [arthas-mvel](https://github.com/XhinLiang/arthas-mvel).

------

### Footer {#footer}

[xhinliang.com](https://xhinliang.com)

------
