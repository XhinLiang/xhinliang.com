# Xhin Liang
## Senior software engineer

> ✉️ <x@xhinliang.com>  
> 🇨🇳 [xhinliang.com/resume/cn](/resume/cn)  
> 📱 (+86)18537903271


------

### Profile {#profile}

Senior software engineer with a wide range of interests, focusing on backend development and distributed system.

------

### Skills {#skills}

* Backend Deployment
  : Proficient in backend deployment, familiar with operating system, RDBMS, distributed system and computer network.

* Frontend Deployment
  : Understand mobile and web development, mastered the ability to troubleshoot issues from interface to database.

* Project Management
  : Well Capable in project management with strong sense of responsibility, skilled at writing and communicating.

-------

### Tech Stack {#techstack}

1. Java / Python / JavaScript
2. Netty / Guava / JUC
3. TCP / HTTP / WebSocket
4. MySQL / Redis / Memcached
5. ZooKeeper / Kafka / gRPC
6. Linux / macOS / Kubernetes

------

### Experience {#experience}

Kuaishou
: *Backend Developer*
  __2018.1-NOW__
  Backend developer of server platform, building the most dramatic and largest live streaming platform in the world;  
  Architect of serial foundational features such as live signaling frameworks, cover storing, TCP networking and CDN scheduling;  
  Stability director of several substantial events, supporting Spring Festival, National Day and Promotion Night;  
  One of the youngest interviewer and technical speaker in the company.

Tencent
: *Fullstack Developer*
  __2017.7-2018.1__
  Backend developer of the SRE operation platform and content-crawling system; Mobile developer of MOKA app.

Tencent
: *Backend Developer, Intern*
  __2016.5-2017.5__
  Backend developer of cloud-publishing platform and cloud-editing system.

Xidian University
: *Informatics Engineering, Bachelor*
  __2013.8-2017.7__
  Winner of the National Encouragement Scholarship; Outstanding graduate of the college.

-----

### Highlights {#highlight}


Scalable Shading Framework
:  
  __Kuaishou__
  Kuaishou provide a live streaming platform which was supporting over 400k broadcasting room concurrently.  
  Each broadcasting room has it's own business data or flow to process, such as watching list, online count, or some boring games base on live streaming.  
  We designed a framework based on ZooKeeper and gRPC, the core concept of this framework is from MapReduce. When we need to process some new feature of each broadcasting room, we can simply using this framework to implement our business logic, and this framework will automaticly scale up or down according tho the number of process node.

SAGA like Red Envelope Framework
:  
  __Kuaishou__
  In China, Red Envelope is common way to attract people to increase user engagement. We can meet many Red Envelope in a same application, but there are some differences and also some similarities between them.   
  According to the common usages, we designed a framework based on gRPC and MySQL, aiming to reduce the duplicate developing work in most Red Envelope use cases. The core idea is similar with a distributed transatiion method called SAGA.    
  The framework provide four core functions, including create and deposit, divide and transfer, covering the whole lifecycle of Red Envelope. When we are building a new Red Envelope use case, all we need to do is just register in the framework and implement some required currency management method.  

Live Signaling Frameworks
:  
  __Kuaishou__
  According to the protocal and broadcasting model of long-connection server, we built several frameworks which totaly decouple it from bussniesses.  
  These frameworks support different sytle bussiness by defferent part, including ActionSignal, StateSignal, GlobalBroadcastSignal, etc.  
  All of them are widely used and obviously improve the develop efficiency.

Karthas
:  
  __Kuaishou__
  As a part-time developer, joined the infra team and build a JVM tool independently called Karthas which based on Arthas.  
  Based on Arthas, Karthas support more effective function to use, such as web-console, initial-script, and the killer feature called MVEL.
  Relying on MVEL, we can call any method of our application conveniently. I made this feature open-sourced in [arthas-mvel](https://github.com/XhinLiang/arthas-mvel)

------

### Footer {#footer}

[xhinliang.com](https://xhinliang.com)

------
