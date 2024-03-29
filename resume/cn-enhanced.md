# 梁栩华
## 后端开发工程师

> ✉️ <x@xhinliang.com>  
> 🌎 [xhinliang.com/resume/en-enhanced](/resume/en-enhanced)  
> 📱 (+86)18537903271

------

### Profile {#profile}

兴趣广泛的软件工程师，目前关注于后端开发与分布式系统。

------

### Skills {#skills}

* 后端开发
  : 了解直播系统的方方面面，擅长业务抽象、框架设计，拥有大型分布式系统开发经验。

* Web 开发
  : 熟悉网络协议，拥有全栈开发经验，具备端到端的理解能力。

* 项目管理
  : 擅长写作和沟通，具备良好的项目管理能力，有强烈的责任心。

-------

### Technical {#technical}

1. Java / Go
2. Netty / Guava / JUC
3. TCP / HTTP / WebSocket
4. MySQL / Redis / Memcached
5. ZooKeeper / Kafka / gRPC
6. Linux / macOS / Kubernetes

------

### Experience {#experience}

Shopee
: *Content Service-Expert Engineer*
  __2021.12-Now__
  后端业务架构开发，对 logging, dynamic config, feature toggle, error handling 相关的后端框架有贡献；  
  Content Service 内容搜索业务 Leader，带领 6 人团队负责内容搜索业务的前后端以及测试。


快手科技
: *直播后端架构组-资深后端开发*
  __2018.1-NOW__
  快手直播业务后端开发，开发和维护着世界上最大的直播平台，见证在线数从百万量级到千万量级的变迁；  
  作为核心架构开发者，主导开发了直播信令框架、封面存储和审核系统，主导优化了长连接网络以及 CDN 调度算法；  
  连续作为后端负责人参与了多个活动的稳定性保障，例如春晚直播、616大促、国庆直播等，平稳支撑千万级在线，中间无故障产生；  
  连续多次优秀绩效，成为组里最年轻的面试官，并作为讲师负责了多次内部培训。

腾讯科技
: *腾讯视频-Web开发 & 网络媒体技术部-后端开发实习生*
  __2016.5-2018.1__
  在网媒内容管理平台中心实习，并得到转正。  
  实习期间参与直播剪辑系统及彩云出版系统的维护与开发，以及腾讯视频移动开发&网媒运营平台后端开发。  
  工作期间参与腾讯视频创新产品客户端开发，参与内容抓取系统开发与维护，主导搭建网媒运维监控集成平台。

西安电子科技大学
: *信息工程，本科*
  __2013.8-2017.7__
  国家励志奖学金获得者，学院优秀毕业生。

-----

### Highlights {#highlight}


Tracing & Logging 优化
:  
  __Shopee__
  基于 Jaeger 设计了一套从前端到后端所有微服务的 tracing 流程，支持 sample 和白名单逻辑；  
  基于现有 Spex RPC 框架扩展了 trace-id 以及多个业务必要参数的自动化透传；    
  实现了一些有关 logging 和 tracing 的组件，包括 rate-logging, custom RPC header, error reporting 等，并编写多个部门级别的 OnBoarding 和 Manual 文档。

直播信令框架
:  
  __主导开发、负责维护__
  我们通过分析不同业务场景共性需求，将信令分成了状态同步、消息展示、全局通知等多个类型，并设计抽象框架解决老方式开发成本高、消息易丢失、性能低下等问题。   
  这些信令框架在 19 年开始设计并开始使用，稳定支撑了榜单推送、PK、连麦、小时榜等功能，日均发送信令数量近百亿，通过多次千万级同时在线的活动直播的考验。

直播分布式计算框架
:  
  __参与开发、负责维护__
  随着业务发展，快手直播下的业务功能越来越多。我们基于 ZooKeeper 和 gRPC 设计了一个分布式计算框架，核心理念类似 MapReduce。在框架中，每个房间级别的业务功能处理逻辑会平均分布在各个计算节点上，业务只需要关注自己的核心计算逻辑。  
  通过接入框架，我们便捷地实现了直播间的榜单计算、PK分数计算、在线数计算等核心功能，并能根据实际业务场景进行动态扩缩容，在百万量级房间数的情况下依然保持了优秀的可用性。

直播场景下的红包中台
:  
  __主导开发、负责维护__
  红包是一个很常见的运营手段。我们参照了 SAGA 分布式事务的思想，设计了一个红包中台，能够快速支持常见的红包功能的开发。  
  通过接入这样一个红包中台业务上仅需实现几个样板方法，即可以实现红包的核心功能。红包中台会根据预估抢红包人数自动进行请求打散、数据分片等功能，同时红包中台也可以支持各种支付来源，并使用 Kafka + 轮刷的手段保证业务准确性。  
  红包中台支持了多个直播间内的功能，例如竞猜抽奖、口令红包、穿云箭红包等，并稳定支持了数百万同时在线的抢红包行为。

Karthas
:  
  __独立开发、负责维护__
  Kbox 是快手基于 OpenJDK 定制的 JDK。我利用业余时间加入了其中的开发，并独立实现了 Karthas 功能。  
  Karthas 基于 Arthas 定制开发，为快手添加了多个定制场景的功能。例如 web-console initial-script，以及最受欢迎的杀手功能 MVEL。通过 MVEL，我们可以在运行时动态执行任意的方法，实现类似 Python 的 REPL 功能，极大地提高了工作效率，提升了问题排查速度。

------

### Footer {#footer}

个人网站 -- [xhinliang.com](https://xhinliang.com)

------
