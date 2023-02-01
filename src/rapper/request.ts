/* md5: 4cfcaaf4661f5056f47f093b0697509f */
/* Rap仓库id: 32 */
/* Rapper版本: 0.0.1-experimental.0 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.duomai.cn/repository/editor?id=32
 */

export interface IModels {
  /**
   * 接口名：热门素材 热门作品
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=174&itf=894
   */
  "GET/material/erec/video": {
    Req: {
      /**
       * 关键字
       *
       */
      keywords?: string;
      /**
       * 品牌
       *
       */
      brandId?: string;
      /**
       * 平台
       * _all全平台
       * weibo 微博
       * xhs 小红书
       * bilibili B站
       */
      platform: string;
      /**
       * 起始时间
       */
      startDate: string;
      /**
       * 结束时间
       */
      endDate: string;
      /**
       * 达人id 在达人详情作品列表使用
       */
      talentSourceId?: string;
      page?: string;
      pageSize?: string;
      /**
       * score 热卖指数
       * like 获赞数
       * interactive 互动数
       */
      orderName?: string;
      /**
       * /material/erec/video?keywords=&mediaCategoryId=0&platform=_all&startDate=2020-12-31&endDate=2021-01-07&page=1&pageSize=10&orderName=score
       */
      eg?: string;
      /**
       * 搜索类型
       * 视频 1 音乐 2  文章 3
       */
      type?: string;
      /**
       * 达人key
       */
      key?: string;
      /**
       * 美妆分类id
       */
      labelParentId?: number;
      /**
       * 细分类目id
       */
      labelId?: number;
      /**
       * 品牌id，多个逗号分隔
       */
      brandIds?: string;
      /**
       * categoryLabel，类目
       */
      categoryLabel?: number;
      /**
       * 商品id，多个则逗号分隔
       */
      productIds?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        videoId: number;
        /**
         * 资源id
         */
        videoSourceId: string;
        /**
         * 平台
         */
        platform: string;
        /**
         * 标题
         */
        videoTitle: string;
        /**
         * 内容
         */
        videoContent: string;
        /**
         * 头像
         */
        videoCover: string;
        /**
         * 地址路径
         */
        videoUrl: string;
        /**
         * 获赞数
         */
        like: string;
        /**
         * 评论数
         */
        comment: number;
        /**
         * 收藏数
         */
        collect: string;
        /**
         * 互动数
         */
        interactive: string;
        type: number;
        createTime: string;
        insertTime: string;
        updateTime: string;
        spider: string;
        /**
         * 关键词
         */
        keywords: string[];
        category: number[];
        /**
         * 热卖指数
         */
        score: string;
        topic: string[];
        /**
         * 关联品牌id
         */
        brandIds: number[];
        talentInfo: {
          /**
           * 达人资源id
           */
          talentSourceId: string;
          /**
           * 达人昵称
           */
          talentNickname: string;
          /**
           * 达人头像
           */
          talentAvatar: string;
          /**
           * 粉丝数
           */
          fans: number;
        };
        isAdzone: number;
        /**
         * 转发数
         */
        transpond: number;
        coin: number;
        productTotal: number;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：热门作品 作品详情
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=174&itf=896
   */
  "GET/material/erec/video/detail": {
    Req: {
      /**
       * 视频id
       */
      videoId: string;
      /**
       * /material/erec/video/detail?videoId=319387101
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        videoId: number;
        /**
         * 资源id
         */
        videoSourceId: string;
        /**
         * 平台
         */
        platform: string;
        /**
         * 标题
         */
        videoTitle: string;
        /**
         * 内容
         */
        videoContent: string;
        /**
         * 头像
         */
        videoCover: string;
        /**
         * 地址链接
         */
        videoUrl: string;
        /**
         * 获赞数
         */
        like: string;
        /**
         * 评论数
         */
        comment: string;
        /**
         * 收藏数
         */
        collect: string;
        /**
         * 转发数
         */
        transpond: string;
        /**
         * 弹幕数
         */
        barrage: string;
        /**
         * 互动数
         */
        interactive: string;
        /**
         * 阅读数
         */
        read: string;
        /**
         *  1：视频，2：音频，3：图文
         * 默认图文(3)
         */
        type: string;
        createTime: string;
        insertTime: string;
        updateTime: string;
        spider: string;
        /**
         * 关键词
         */
        keywords: string[];
        /**
         * 作品分类
         */
        category: string[];
        /**
         * 热卖指数
         */
        score: string;
        topic: unknown[];
        keys: string;
        brandIds: number[];
        productTotal: number;
        /**
         * 达人信息(具体参数看总字段文件)
         */
        talentInfo: {
          /**
           * 达人id
           */
          talentId: number;
          /**
           * 平台
           */
          platform: string;
          /**
           * 资源id
           */
          talentSourceId: string;
          /**
           * 达人昵称
           */
          talentNickname: string;
          /**
           * 达人头像
           */
          talentAvatar: string;
          /**
           * 粉丝数
           */
          fans: string;
          /**
           * 认证信息
           */
          talentAuthentication: string;
          /**
           * 认证类型
           * 1
           */
          authType: number;
        };
        statistics: {
          like: string;
          comment: string;
          transpond: string;
          /**
           * 商品数
           */
          goodsNum: number;
          /**
           * 赞粉比
           */
          likeDivFans: string;
        };
        rank: string;
        videoAudio: unknown[];
        /**
         * 作品cpe信息
         */
        cpeData: {
          /**
           * 达人cpe
           */
          cpe: number;
          /**
           * 行业cpe
           */
          industryCpe: number;
          /**
           * platform 平台
           * predict 系统
           */
          channel: string;
        };
      };
      e: null;
    };
  };

  /**
   * 接口名：热门作品 作品详情 数据概览
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=174&itf=897
   */
  "GET/material/erec/video/trend": {
    Req: {
      /**
       * 视频id
       */
      videoId: string;
      /**
       * /material/erec/video/trend?videoId=319387101&startDate=2020-12-31&endDate=2021-01-07
       */
      eg?: string;
      endDate: string;
      startDate: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 时间序列
         */
        dateList: string[];
        /**
         * 阅读数量
         */
        readList: number[];
        /**
         * 点赞数量
         */
        likeList: number[];
        /**
         * 评论数量
         */
        commentList: number[];
        /**
         * 转发数量
         */
        transpondList: number[];
        /**
         * 收藏数量
         */
        collectList: number[];
        /**
         * 弹幕数量
         */
        barrageList: number[];
        /**
         * 投币数量
         */
        coinList: number[];
        /**
         * 点赞增量
         */
        likeIncrList: number[];
        /**
         * 评论增量
         */
        commentIncrList: number[];
        /**
         * 转发增量
         */
        transpondIncrList: number[];
        /**
         * 收藏增量
         */
        collectIncrList: number[];
        /**
         * 弹幕增量
         */
        barrageIncrList: number[];
        /**
         * 投币增量
         */
        coinIncrList: number[];
        /**
         * 汇总增量
         */
        likeIncr: number;
        /**
         * 汇总增量
         */
        commentIncr: number;
        /**
         * 汇总增量
         */
        transpondIncr: number;
        /**
         * 汇总增量
         */
        collectIncr: number;
        /**
         * 汇总增量
         */
        barrageIncr: number;
        /**
         * 汇总增量
         */
        coinIncr: number;
        /**
         * 汇总增量
         */
        readIncr: number;
        /**
         * 互动数相关
         */
        worksInteractiveItems: {
          /**
           * 分组：interactive3，同interactive7, interactive14, interactive30, interactiveCpe
           */
          interactive3: {
            /**
             * 互动数
             */
            worksInteractive: number;
            /**
             * 平均互动数
             */
            worksAvgInteractive: number;
            /**
             * 偏移量
             */
            worksOffsetInteractive: string;
            /**
             * 偏移类型 1 0 -1
             */
            offsetType: number;
          };
        };
      };
      e: null;
    };
  };

  /**
   * 接口名：热门作品 作品详情 电商分析
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=174&itf=899
   */
  "GET/material/erec/video/analysis": {
    Req: {
      /**
       * 视频id
       */
      videoId: string;
      /**
       * 开始时间
       */
      startData: string;
      /**
       * 结束时间
       */
      endData: string;
      /**
       * /material/erec/video/analysis?videoId=319387101&startDate=2020-01-08&endDate=2021-01-07&orderName=productCouponAfterPrice
       */
      eg?: string;
      /**
       * 允许排序字段
       * productCouponAfterPrice 价格
       * productSales 销量
       * materialTotal 关联作品数
       * score 关联指数
       */
      orderName?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 商品id
         */
        productId: number;
        /**
         * 平台
         */
        platform: string;
        /**
         * key值
         */
        productKey: string;
        /**
         * 原始id
         */
        productOriginalId: string;
        shopId: string;
        merchantId: number;
        /**
         * 店铺名称
         */
        shopName: string;
        productTitle: string;
        productMainPicture: string;
        productImages: string[];
        productLink: string;
        /**
         * 售价
         */
        productCouponAfterPrice: number;
        /**
         * 原始价格
         */
        productOriginalPrice: string;
        /**
         * 销量
         */
        productSales: number;
        /**
         * 关联商品数
         */
        materialTotal: number;
        /**
         * 热卖指数
         */
        score: string;
        /**
         * 分类
         */
        category: string[];
      }[];
      e: null;
    };
  };

  /**
   * 接口名：作品详情-评论分析
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=174&itf=1171
   */
  "GET/material/erec/video/comment": {
    Req: {
      /**
       * 平台
       */
      platform: string;
      /**
       * 作品 sourceId
       */
      works: string;
      page: string;
      pageSize: string;
      /**
       * 允许排序字段
       * 'score' => 热麦指数
       * 'createTime' => 创建时间
       * 'read' => 阅读数/播放数
       * 'like' =>点赞数
       *  'comment' =>品论数
       * 'tanspond' =>转发数
       * 'interactive' => 互动数
       *  'collect' => 收藏数
       *  'baggage' => 弹幕数
       * 'coin' =>投币数
       *  'goodNum' =>关联商品数
       */
      order?: string;
      /**
       * /material/erec/video/comment?page=1&platform=weibo&pageSize=1&works=4609859032975846
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * key
         */
        key: string;
        /**
         * 平台
         */
        platform: string;
        /**
         * 达人sourceId
         */
        talentSourceId: string;
        /**
         * 昵称
         */
        talentNick: string;
        /**
         * 头像
         */
        logo: string;
        /**
         * 评论内容
         */
        content: string;
        /**
         * 获赞数
         */
        like: number;
        /**
         * 作品资源di
         */
        workSourceId: string;
        /**
         * 创建时间
         */
        createTime: string;
        /**
         * 评论情感极性,参考:情感极性字典
         */
        sentiment: number;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：作品详情-评论分析(词云)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=174&itf=1172
   */
  "GET/material/erec/video/word": {
    Req: {
      /**
       * 作品id
       */
      id: string;
      /**
       * /material/erec/video/word?id=365401812
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 弹幕关键词云
         */
        barrageKeywords: {
          南宁: number;
          青春: number;
          这歌: number;
          感觉: number;
          经典: number;
          声音: number;
          完美: number;
          封面: number;
          姐姐: number;
          喜欢: number;
          眼睛: number;
          风云: number;
          看过: number;
          标准: number;
          李荣浩: number;
          美好: number;
          秋官: number;
          awsl: number;
          好看: number;
          汪小敏: number;
          小敏: number;
          太美: number;
          好好看: number;
          唱歌: number;
          颜值: number;
          节目: number;
          播放: number;
          开头: number;
          郑少秋: number;
          巅峰: number;
          好听: number;
          粤语: number;
          笑容: number;
          味道: number;
          恋爱: number;
          回来: number;
          心动: number;
          大时代: number;
          漂亮: number;
          惊艳: number;
          报恩: number;
          老婆: number;
          男人: number;
          美歌: number;
          歌手: number;
          美啊: number;
          冯提莫: number;
          原唱: number;
          卧槽: number;
          眉毛: number;
        };
        /**
         * 评论关键词云
         */
        commentKeywords: {
          青春: number;
          地方: number;
          希望: number;
          唱功: number;
          doge: number;
          感觉: number;
          声音: number;
          封面: number;
          姐姐: number;
          喜欢: number;
          眼睛: number;
          风云: number;
          标准: number;
          参加: number;
          不枉: number;
          翻唱: number;
          视频: number;
          推荐: number;
          好看: number;
          汪小敏: number;
          美女: number;
          鹿晗: number;
          歌曲: number;
          太美: number;
          唱歌: number;
          实力: number;
          粉丝: number;
          节目: number;
          郑少秋: number;
          好听: number;
          粤语: number;
          粤语歌: number;
          发音: number;
          华晨: number;
          bv: number;
          春晚: number;
          没想到: number;
          关注: number;
          漂亮: number;
          张韶涵: number;
          老婆: number;
          广西: number;
          姑娘: number;
          星星: number;
          歌手: number;
          冯提莫: number;
          记得: number;
          广东: number;
          资本: number;
          好像: number;
        };
      };
      e: null;
    };
  };

  /**
   * 接口名：作品详情-商品列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=174&itf=1401
   */
  "GET/material/product/list": {
    Req: {
      /**
       * 作品资源id
       */
      sourceId: string;
      /**
       * 平台
       */
      platform: string;
      /**
       * /material/product/list?sourceId=4612280820434648&platform=weibo
       */
      eg?: string;
    };
    Res: {
      "返回数据与 品牌详情-商品列表 一致": string;
    };
  };

  /**
   * 接口名：通过作品keys获取作品列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=174&itf=4006
   */
  "GET/material/work": {
    Req: {
      /**
       * workKeys json 数组
       */
      workKeys?: string;
      /**
       * 1 携带达人信息，列表每个元素内添加account字段，内容同达人详情
       * 0 不携带
       */
      showAccount?: number;
    };
    Res: {
      f: number;
      m: string;
      d: {
        id: number;
        key: string;
        sourceId: string;
        platform: string;
        title: string;
        content: string;
        cover: string;
        images: string[];
        videoUrl: string;
        preRead: number;
        like: number;
        comment: number;
        collect: string;
        type: number;
        createTime: string;
        insertTime: string;
        updateTime: string;
        author: string;
        authorNick: string;
        keywords: {
          限流: number;
          热门: number;
          官方: number;
        };
        keywordsOfficial: string;
        commentKeywords: {
          公司: number;
          人类: number;
          胃口: number;
          眼皮跳: number;
          谈谈: number;
          看过: number;
          不好: number;
          视频: number;
          看着: number;
          鸡肉: number;
          失控: number;
          蓝兮: number;
          明白: number;
          香港: number;
          神情: number;
          亿点点: number;
          大哭: number;
          永存: number;
          来源于: number;
          不动: number;
          unique: number;
          流汗: number;
          小飞侠: number;
          love: number;
          抬起: number;
          情绪: number;
          后排: number;
          不太好: number;
          电影: number;
          好似: number;
          新月: number;
          破碎: number;
          了得: number;
          沾染: number;
          置顶: number;
          上帝: number;
          挤出: number;
          官轩: number;
          第一: number;
          女孩: number;
          熙陌: number;
          eternity: number;
          想要: number;
          晚安: number;
          删掉: number;
          昏暗: number;
          牙缝: number;
          深情: number;
          阿志抱: number;
          单身: number;
        };
        account: {
          talentId: number;
          talentKey: string;
          talentSourceId: string;
          platform: string;
          talentNickname: string;
          talentMcn: unknown[];
          talentAvatar: string;
          talentAuthentication: string;
          talentProvince: string;
          talentCity: string;
          authType: number;
          key: string;
          talentSignature: string;
          talentGender: number;
          fans: string;
          collect: string;
          activeFans: number;
          focusNum: number;
          read: number;
          like: string;
          comment: number;
          transpond: number;
          interactive: string;
          works: number;
          updateTime: string;
          insertTime: string;
          spider: string;
          keywords: string[];
          category: string[];
          score: string;
          talentLevel: number;
          isCollect: number;
          showcase: null;
          fansMonth: null;
          interactiveMonth: null;
          activeFansRatio: string;
          tags: string[];
          isPromotion: boolean;
          relationWorks: number;
          promotionWorks: number;
          promotionWorksRatio: string;
          videoTypeWorksRatio: null;
          audioTypeWorksRatio: null;
          imgtxtTypeWorksRatio: null;
          labelDatas: {
            id: number;
            parentId: number;
            name: string;
            level: number;
            keywords: null;
            display: number;
            categoryId: null;
            status: number;
            rank: null;
            subLabels: {
              id: number;
              parentId: number;
              name: string;
              level: number;
              keywords: string[];
              display: number;
              categoryId: null;
              status: number;
              rank: number;
              subLabels: unknown[];
            }[];
          }[];
          talentSourceUrl: string;
          likeAndCollect: string;
          likeAndCollectDivFans: number;
        };
        category: number[];
        globalCat: number[];
        mediaCats: {
          id: number;
          platform: string;
          name: string;
          parentId: number;
          relatedId: number;
        }[];
        labels: unknown[];
        labelNum: number;
        score: string;
        topic: string[];
        brandIds: number[];
        interactive: string;
        categoryStr: string[];
        outsideSink: boolean;
        offlineFp: number;
        commentBrandIds: unknown[];
        likes: string;
        transpond: number;
        read: number;
        workLabelDatas: unknown[];
      }[];
      e: null;
    };
  };

  /**
   * 接口名：作品搜索建议
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=174&itf=4060
   */
  "GET/material/work/searchSuggestion": {
    Req: {
      /**
       * 多关键词，逗号分隔
       * 兰蔻,精华,眼霜,效果
       */
      keywords?: string;
      /**
       * xhs
       */
      platform?: string;
      /**
       * 2022-10-01 00:00:00
       */
      startDate?: string;
      /**
       * 2022-11-10 00:00:00
       */
      endDate?: string;
      /**
       *  1 为视频，3为图文，0或不传 为全部
       */
      type?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 标题
         */
        title: string;
        /**
         * 内容
         */
        content: string;
        platform: string;
        /**
         * 作品创建时间
         */
        createTime: string;
        like: number;
        comment: number;
        transpond: string;
        barrage: string;
        collect: number;
        coin: string;
        /**
         * 封面链接
         */
        cover: string;
        marked: null;
        /**
         * 作品原文地址
         */
        videoUrl: string;
        /**
         * 作品id
         */
        sourceId: string;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：ai写作
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=174&itf=4729
   */
  "GET/material/work/aiWriting": {
    Req: {
      /**
       * 多个关键词逗号分隔
       * 例： 兰蔻,小棕瓶,护肤,抗老
       *
       * 每次请求后返回文章都不同
       */
      keywords?: string;
    };
    Res: {
      f: number;
      m: string;
      d: string[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：达人列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=884
   */
  "GET/talent/erec/query": {
    Req: {
      /**
       * 关键词
       */
      keywords?: string;
      /**
       * 平台
       */
      platform?: string;
      /**
       * 认证信息
       */
      authType?: string;
      /**
       * 达人类型
       */
      mediaCategoryId?: string;
      /**
       * 省
       */
      province?: string;
      /**
       * 城市
       */
      city?: string;
      /**
       * 是否开启商品橱窗
       */
      isShowcase?: string;
      /**
       * 点赞数最大值
       */
      likeMin?: string;
      /**
       * 点赞数最小值
       */
      likeMax?: string;
      /**
       * 评论
       */
      commentMin?: string;
      commentMax?: string;
      /**
       * 分享
       */
      transpondMin?: string;
      transpondMax?: string;
      /**
       * 粉丝数
       */
      fansMin?: string;
      fansMax?: string;
      /**
       * 性别,达人性别过滤，0-未知，1-男，2-女
       */
      talentGender?: string;
      /**
       * json 该字段和以前一样,["g1","a2","杭州"] 粉丝标签,/ 粉丝画像标签，g1:男生占优，g2:女生占优，
       * a1: 6-17, a2: 18-24, a3: 25-30, a4: 31-35, a5: 36-40, a6: 41+,
       * 另外还会包含至少一个主要省份，以及一个主要城市。另外的信息暂请忽略 /
       */
      talentFansTags?: string;
      /**
       * /talent/erec/query?page=1&keywords=&province=&city=&pageSize=20&platform=weibo&orderName=score&mediaCategoryId=&authType=&likeMin=&likeMax=&commentMin=&commentMax=&transpondMin=&transpondMax=&fansMin=&fansMax=
       */
      eg?: string;
      /**
       * 达人标签id,逗号分隔
       */
      labelList?: string;
      /**
       * 达人报价类型key
       */
      priceTypeKey?: string;
      /**
       * 达人报价范围-起始报价
       */
      priceFrom?: number;
      /**
       * 达人报价范围-封顶报价
       */
      priceTo?: number;
      /**
       * 互动中位数范围-起始范围
       */
      interactiveMedianFrom?: number;
      /**
       * 互动中位数范围-封顶范围
       */
      interactiveMedianTo?: number;
      /**
       * 内容类目 json
       */
      contentCatLabel?: string;
      /**
       * 博主人设 json
       */
      accountLabel?: string;
      /**
       * 内容特征 json
       */
      contentLabel?: string;
      /**
       * 40423 图文为主，40424 视频为主
       */
      mainWorkType?: number;
      /**
       * 时段数据 _7/_30/_180/_360...
       */
      dateRange?: number;
      /**
       * score
       * fans
       * like
       * comment
       * transpond
       * product_total
       * interactive
       * works
       * relationWorks
       * fansInc 粉丝增量排序 配合dateRange
       * interactiveInc 互动增量排序 配合dateRange
       * worksInc 作品增量排序 配合dateRange
       * interactiveMedianInc 互动中位数增量排序 配合dateRange
       */
      orderName?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        talentId: number;
        /**
         * 原始id
         */
        talentSourceId: string;
        /**
         * 平台
         */
        platform: string;
        /**
         * 昵称
         */
        talentNickname: string;
        /**
         * 达人头像地址
         */
        talentAvatar: string;
        /**
         * 认证信息
         */
        talentAuthentication: string;
        /**
         * 认证类型
         * 个人认证 1
         * 企业认证 2
         * 金 V 认证（微博特有） 3
         */
        authType: number;
        /**
         * 简介
         */
        talentSignature: string;
        /**
         * 性别
         */
        talentGender: number;
        /**
         * 粉丝数
         */
        fans: string;
        /**
         * 活跃粉丝数
         */
        activeFans: string;
        /**
         * 关注人数
         */
        focusNum: number;
        /**
         * 阅读数
         */
        read: string;
        /**
         * 获赞数
         */
        like: string;
        /**
         * 评论数
         */
        comment: string;
        /**
         * 转发数
         */
        transpond: string;
        /**
         * 互动数
         */
        interactive: string;
        /**
         * 作品数
         */
        works: number;
        updateTime: string;
        spider: string;
        keywords: string[];
        category: unknown[];
        /**
         * 热麦指数
         */
        score: string;
        talentLevel: number;
        /**
         * 是否加入收藏
         * 1 加入 0 未加入
         */
        isCollect: number;
        /**
         * 达人标签信息，树级结构
         */
        labelDatas: {
          /**
           * 标签id
           */
          id: number;
          /**
           * 标签名称
           */
          name: string;
          /**
           * 父级id
           */
          parentId: number;
          /**
           * 标签所在级别
           */
          level: number;
          /**
           * 子级 labelDatas
           */
          subLabels: unknown[];
        }[];
        /**
         * 时段数据
         */
        dateRangeData: {
          /**
           * 时段内粉丝数
           */
          fans: string;
          /**
           * 时段内作品数
           */
          works: string;
          /**
           * 时段内互动数
           */
          interactive: string;
          /**
           * 时段内互动中位数
           */
          medianInteractive: string;
        };
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：达人列表 达人类型 作品类别
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=885
   */
  "GET/common/category": {
    Req: {
      /**
       * 平台名称
       * B站: bilibili
       * 微博: weibo
       * 小红书: xhs
       */
      platform: string;
      /**
       * /common/category?platform=weibo
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        name: string;
        media_category_id: number;
        platform: string;
        parent_id: number;
        children: {
          mediaCategoryId: number;
          name: string;
          platform: string;
          parentId: number;
        }[];
      }[];
      e: null;
    };
  };

  /**
   * 接口名：达人详情
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=886
   */
  "GET/talent/erec/information": {
    Req: {
      /**
       * 达人id
       */
      talentId: string;
      /**
       * 平台
       */
      platform: string;
      /**
       * /talent/erec/information?platform=weibo&talentId=16943962&talentSourceId=
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        talentId: number;
        /**
         * id
         */
        talentSourceId: string;
        platform: string;
        /**
         * 名称
         */
        talentNickname: string;
        talentMcn: unknown[];
        /**
         * 头像
         */
        talentAvatar: string;
        /**
         * 认证
         */
        talentAuthentication: string;
        /**
         * 认证类型
         * 1 个人认证 2 企业认证
         * 微博特殊: 个人认证就是金V 企业认证就是蓝V 3 是金B (除了微博平台以外没有3)
         */
        authType: number;
        key: string;
        talentSignature: string;
        talentGender: number;
        fans: string;
        activeFans: number;
        focusNum: number;
        read: string;
        like: string;
        comment: string;
        transpond: string;
        interactive: string;
        works: string;
        updateTime: string;
        insertTime: string;
        spider: string;
        keywords: string[];
        category: string[];
        /**
         * 指数
         */
        score: string;
        talentLevel: number;
        isFavorite: number;
        /**
         * 是否收藏
         * 1收藏 0 为收藏
         */
        isCollect: number;
        /**
         * 是否加入对比
         * 1加入 0 未加入
         */
        comparType: number;
        /**
         * 基本信息
         * "男/34/摩羯座/屯昌"
         */
        basicInfo: string;
        /**
         * 排名
         */
        rank: string;
        statistics: {
          /**
           * 粉丝数
           */
          fans: string;
          /**
           * 作品数
           */
          works: string;
          read: string;
          /**
           * 获赞数
           */
          like: string;
          /**
           * 互动数
           */
          interactive: string;
          /**
           * 昨日阅读数
           */
          pre_read: string;
          /**
           * 昨日互动数
           */
          pre_interact: string;
          /**
           * 昨日发博数
           */
          pre_works: number;
          /**
           * 赞粉比
           */
          like_div_fans: string;
          /**
           * 粉丝作品比
           */
          fans_div_works: string;
        };
        talent_url: string;
        /**
         * true 更新时间不存在/距今超过30天
         * false 不超过30天
         */
        updatedBefore30: boolean;
        /**
         * 报备占比
         */
        promotionWorksRatio: string;
        /**
         * 视频占比
         */
        videoTypeWorksRatio: string;
        /**
         * 达人标签信息, 树级结构
         */
        labelDatas: {
          /**
           * 标签id
           */
          id: string;
          /**
           * 标签名称
           */
          name: string;
          /**
           * 父级id
           */
          parentId: string;
          /**
           * 标签所在级别
           */
          level: string;
          /**
           * 子级 labelDatas
           */
          subLabels: unknown[];
        }[];
      };
      e: null;
    };
  };

  /**
   * 接口名：达人详情 数据概览
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=887
   */
  "GET/talent/erec/trend": {
    Req: {
      /**
       * 达人id
       */
      talentId: string;
      startDate: string;
      endDate: string;
      /**
       * /talent/erec/trend?platform=weibo&talentId=16943962&endDate=2021-02-19&startDate=2021-02-13
       */
      eg?: string;
      /**
       * 平台
       */
      platform: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 日期序列
         */
        dateList: string[];
        /**
         * 粉丝数总量
         */
        fansList: number[];
        /**
         * 作品数总量
         */
        worksList: number[];
        /**
         * 获赞数总量
         */
        likeList: number[];
        interactiveList: number[];
        /**
         * 粉丝数增量
         */
        fansIncrList: number[];
        /**
         * 作品数增量
         */
        worksIncrList: number[];
        /**
         * 获赞数增量
         */
        likeIncrList: number[];
        interactiveIncrList: number[];
        /**
         * 【已废弃】新增数据(获赞/作品/评论/粉丝/转发)
         */
        increment: {
          commentDay: number;
          fansDay: number;
          worksDay: number;
          likeDay: number;
          transpondDay: number;
          collectDay: null;
          barrageDay: null;
          coinDay: null;
          readDay: null;
          commentWeek: number;
          fansWeek: number;
          worksWeek: number;
          likeWeek: number;
          transpondWeek: number;
          collectWeek: null;
          barrageWeek: null;
          coinWeek: null;
          readWeek: null;
          commentMonth: number;
          fansMonth: number;
          worksMonth: number;
          likeMonth: number;
          transpondMonth: number;
          collectMonth: null;
          barrageMonth: null;
          coinMonth: null;
          readMonth: null;
          /**
           * 180评论数
           */
          commentHalfYear: string;
          /**
           * 180粉丝数
           */
          fansHalfYear: string;
          /**
           * 180作品数
           */
          worksHalfYear: string;
          /**
           * 180获赞数
           */
          likeHalfYear: string;
          /**
           * 180转发数
           */
          transpondHalfYear: string;
          /**
           * 180收藏数
           */
          collectHalfYear: string;
          /**
           * 180弹幕数
           */
          barrageHalfYear: string;
          /**
           * 180投币数
           */
          coinHalfYear: string;
          /**
           * 180阅读数
           */
          readHalfYear: string;
          /**
           * 作品平均互动数
           */
          workAverageInteractive: string;
          /**
           * 周  新增粉丝数/新增作品数
           */
          fansExceptWorksWeek: string;
          /**
           * 月  新增粉丝数/新增作品数
           */
          fansExceptWorksMonth: string;
          /**
           * 年 新增粉丝数/新增作品数
           */
          fansExceptWorksHalfYear: string;
        };
      };
      e: null;
      /**
       * 新增数据，d.incrementData
       */
      incrementData: {
        /**
         * Week - 7, 同 Month - 30， HalfYear - 180， Year - 360
         */
        Week: {
          /**
           * fans-粉丝数
           * 同：
           * like 获赞数
           * collect 收藏数
           * comment 评论数
           * promotionInteractive 报备作品平均互动数
           * noPromotionInteractive 非报备作品平均互动数
           * transpond 转发数
           * coin 投币数
           * read 阅读数/播放数
           * barrage 弹幕数
           * fansPerWork 新增粉丝数/新增作品数
           * avgInteractive 作品平均互动数
           * hotWorks 爆文率
           */
          fans: {
            /**
             * 增长数
             */
            increment: string;
            /**
             * 偏移类型
             * null 无高低持平数据
             * -1 低
             * 0 持平
             * 1 高
             */
            offsetType: null;
            /**
             * 偏移比例
             */
            compareAvgRatio: string;
          };
          /**
           * works - 作品数
           * 同：
           * videoWorks 视频作品
           */
          works: {
            /**
             * 增长数
             */
            increment: string;
            /**
             * 报备作品数
             */
            promotionIncrement: string;
          };
          /**
           * 报价信息map
           * info.name => info
           */
          quoteMap: {
            /**
             * 名称
             */
            name: string;
            /**
             * 报价金额
             */
            value: number;
            /**
             * platform 平台
             * predict 预估
             */
            channel: string;
            /**
             * cpe
             */
            cpe: number;
            /**
             * 偏移类型
             * null 无高低持平数据
             * -1 低
             * 0 持平
             * 1 高
             */
            offsetType: null;
            /**
             * 偏移数值
             */
            compareAvgCpe: number;
            /**
             * 商单cpe
             */
            promotionCpe: string;
            /**
             * 商单cpe偏移类型
             * null 无高低持平数据
             * -1 低
             * 0 持平
             * 1 高
             */
            promotionOffsetType: string;
            /**
             * 商单cpe偏移数值
             */
            promotionCompareAvgCpe: string;
          };
          /**
           * transpondWork - 转发作品数
           */
          transpondWork: {
            /**
             * 转发作品数
             */
            increment: string;
            /**
             * 总作品数
             */
            total: string;
            /**
             * 占比
             */
            percentage: string;
          };
        };
      };
    };
  };

  /**
   * 接口名：达人详情 作品分析(数据分析)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=890
   */
  "GET/talent/erec/material/analysis": {
    Req: {
      /**
       * /talent/erec/material/analysis?talentId=16985815&startDate=2020-12-31&endDate=2021-01-06
       */
      eg?: string;
      /**
       * 达人id
       */
      talentId: string;
      /**
       * 2020-10-13
       */
      startDate: string;
      /**
       * 2020-10-19
       */
      endDate: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 时间分布
         */
        dateList: string[];
        /**
         * 作品总量
         */
        worksList: number[];
        /**
         * 互动总量
         */
        interactiveList: number[];
        /**
         * 作品增量
         */
        worksIncrList: number[];
        /**
         * 互动增量
         */
        interactiveIncrList: number[];
        /**
         * 作品类型分布
         */
        categoryMap: {
          其他: number;
          情感: number;
          时尚: number;
        };
        /**
         * 热评词云
         */
        keywordMap: {
          起动: number;
          woon: number;
          随便: number;
          拉伸: number;
          感觉: number;
          买买: number;
          姐姐: number;
          喜欢: number;
          飞吻: number;
          三轮: number;
          上衣: number;
          主页: number;
          加油: number;
          身材: number;
          beginner: number;
          头发: number;
          更美: number;
          fitness: number;
          搜到: number;
          不好: number;
          视频: number;
          跳舞: number;
          衣服: number;
          app: number;
          跟不上: number;
          小马哥: number;
          marshall: number;
          好看: number;
          甩头: number;
          全程: number;
          上班: number;
          微笑: number;
          好好看: number;
          变化: number;
          vo: number;
          小红书: number;
          动作: number;
          zumba: number;
          害羞: number;
          厉害: number;
          买点: number;
          michelle: number;
          运动: number;
          不到: number;
          跟着: number;
          谢谢: number;
          打卡: number;
          分享: number;
          偷笑: number;
          january: number;
        };
        maxWorks: {
          value: number;
          label: string;
        };
        maxInteractive: {
          value: number;
          label: string;
        };
        maxCategory: {
          value: string;
          label: string;
        };
        /**
         * 作品属性分布
         */
        worksTypeMap: {};
        /**
         * 作品投放占比分布
         */
        worksPromotionMap: {};
        /**
         * 最大作品属性
         */
        maxWorksType: {
          /**
           * 占比
           */
          value: string;
          /**
           * 名称
           */
          label: string;
        };
        /**
         * 最大作品投放占比
         */
        maxPromotion: {
          /**
           * 占比
           */
          value: string;
          /**
           * 名称
           */
          label: string;
        };
        /**
         * 作品标签词云分布
         */
        workLabelMap: {};
        /**
         * 作品内容词云分布
         */
        workContentMap: {};
        /**
         * 作品弹幕词云分布
         */
        barrageMap: {};
      };
      e: null;
    };
  };

  /**
   * 接口名：达人详情  粉丝画像
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=889
   */
  "GET/talent/erec/information/fans": {
    Req: {
      /**
       * 达人id
       */
      talentId: string;
      startData?: string;
      endData?: string;
      /**
       * /talent/erec/information/fans?talentId=16943962&startDate=2020-12-31&endDate=2021-01-06
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 粉丝城市分布TOP5
         */
        fansProvince: {
          广东: number;
          浙江: number;
          四川: number;
          江苏: number;
          山东: number;
        };
        fansCity: {
          北京: number;
          上海: number;
          广州: number;
          成都: number;
          杭州: number;
        };
        /**
         * 粉丝年龄分布
         */
        fansAge: {
          "25-30": number;
          "18-24": number;
          "31-35": number;
          "36-40": number;
          "41+": number;
          "6-17": number;
        };
        /**
         * 粉丝性别分布
         */
        fansGender: {
          女: number;
          男: number;
        };
        /**
         * 粉丝星座分布TOP5
         */
        fansCons: {
          摩羯座: number;
          天蝎座: number;
          天秤座: number;
          射手座: number;
          狮子座: number;
        };
        /**
         * 粉丝兴趣分布TOP5
         */
        fansInterest: {
          娱乐: number;
          时尚: number;
          社会: number;
          科技: number;
          搞笑: number;
          其他: number;
        };
      };
      e: null;
    };
  };

  /**
   * 接口名：达人详情-作品列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=1167
   */
  "GET/talent/cooperate/brand/list": {
    Req: {
      /**
       * sourceid
       */
      sourceId: string;
      /**
       * 平台
       */
      platform: string;
      /**
       * 类目id
       */
      brandCat?: string;
      /**
       * 排序字段
       * works 合作作品数
       * interactive 互动数
       * avgInteractive 平均互动数
       * score 品牌热麦指数
       */
      order?: string;
      /**
       * 搜索关键词
       */
      query?: string;
      /**
       * 开始时间
       */
      startDate: string;
      /**
       * 结束时间
       */
      endDate: string;
      /**
       * /talent/cooperate/brand/list?sourceId=1642591402&startDate=2021-02-26&endDate=2021-03-04&platform=weibo&order=interactive
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * logo
         */
        brandLogo: string;
        /**
         * 名称
         */
        brandName: string;
        /**
         * 合作作品数
         */
        cooperateWorks: number;
        /**
         * 互动数
         */
        interactive: number;
        /**
         * 平均互动数
         */
        avgInteractive: number;
        /**
         * 热卖指数
         */
        score: number;
        /**
         * 分类id
         */
        brandCat: number;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：达人详情-品牌合作-数据分析
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=1168
   */
  "GET/talent/cooperate/brand/analysis": {
    Req: {
      /**
       * sourceId
       */
      sourceId: string;
      /**
       * 平台
       */
      platform: string;
      /**
       * 开始时间
       */
      startDate?: string;
      /**
       * 结束时间
       */
      endDate?: string;
      /**
       * /talent/cooperate/brand/analysis?sourceId=1968758563&startDate=2021-02-26&endDate=2021-03-04&platform=weibo
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 品牌品类分布
         */
        brandCatMap: {
          鞋类箱包: number;
          钟表首饰: number;
          美妆个护: number;
          食品保健: number;
        };
        /**
         * 品牌合作次数分布
         */
        brandWorksList: {
          /**
           * id
           */
          id: null;
          /**
           * 名称
           */
          label: string;
          /**
           * 排序值
           */
          value: number;
        }[];
      };
      e: null;
    };
  };

  /**
   * 接口名：达人详情-品牌合作-分类列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=1163
   */
  "GET/talent/cooperate/brand/category": {
    Req: {
      /**
       * souceId
       */
      sourceId: string;
      /**
       * 平台
       */
      platform: string;
      /**
       * 开始时间
       */
      startDate: string;
      /**
       * 结束时间
       */
      endDate: string;
      /**
       * /talent/cooperate/brand/category?sourceId=1968758563&platform=weibo&startDate=2021-02-26&endDate=2021-03-04
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: number;
        /**
         * 分类名
         */
        label: string;
        /**
         * 数量
         */
        value: number;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：达人详情-品牌合作-词云
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=1165
   */
  "GET/talent/cooperate/brand/words": {
    Req: {
      /**
       * sourceId
       */
      sourceId: string;
      /**
       * 开始时间
       */
      startDate: string;
      /**
       * 结束时间
       */
      endDate: string;
      /**
       * 品牌id
       */
      brandId: string;
      /**
       * 平台
       */
      platform: string;
      /**
       * /talent/cooperate/brand/words?sourceId=1642591402&startDate=2021-02-26&endDate=2021-03-04&brandId=15941&platform=weibo
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        commentsCloud: {
          ingrita: number;
          阿乐: number;
          亮相: number;
          vsinger: number;
          微博: number;
          洛天依: number;
          李雪琴: number;
          娱乐: number;
          sulianya: number;
          新浪: number;
          于贞: number;
          vivo: number;
          苏恋雅: number;
        };
        contentCloud: {
          广告创意: number;
          享受: number;
          迎接: number;
          时刻: number;
          超能: number;
          买买: number;
          浪漫: number;
          喜欢: number;
          炫彩: number;
          体验: number;
          捕捉: number;
          vivo: number;
          拍摄: number;
          流露: number;
          幸福: number;
          新品: number;
          出发: number;
          惊喜: number;
          蔡徐: number;
          美好: number;
          开启: number;
          照亮: number;
          简约: number;
          朋友: number;
          体会: number;
          颜值: number;
          形象: number;
          记录: number;
          实力: number;
          直播: number;
          约会: number;
          机身: number;
          不见不散: number;
          幻彩: number;
          期待: number;
          发布会: number;
          邂逅: number;
          携手: number;
          关注: number;
          黄明昊: number;
          代言人: number;
          精彩: number;
          憧憬: number;
          call: number;
          带来: number;
          vivos: number;
          轻薄: number;
          造型: number;
          上线: number;
          哇塞: number;
        };
      };
      e: null;
    };
  };

  /**
   * 接口名：达人详情-关联商品(分类)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=1396
   */
  "GET/talent/product/category": {
    Req: {
      talentSourceId: string;
      platform: string;
      startDate: string;
      endDate: string;
      /**
       * /talent/product/category?platform=weibo&talentSourceId=6439151235&startDate=2021-04-18&endDate=2021-04-24
       */
      "eg:"?: string;
    };
    Res: {
      "返回数据格式 与 达人详情-品牌合作 格式相同": string;
    };
  };

  /**
   * 接口名：达人详情-商品列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=1397
   */
  "GET/talent/product/list": {
    Req: {
      talentSourceId: string;
      platform: string;
      startDate: string;
      endDate: string;
      /**
       * 达人详情-关联商品
       * 携带该参数表
       */
      productCat: string;
      page: string;
      pageSize: string;
      /**
       * /talent/product/list?talentSourceId=6439151235&platform=weibo&startDate=2021-04-18&endDate=2021-04-24&page=1&pageSize=10&productCat=368
       */
      eg?: string;
      /**
       * 达人详情-品牌合作-商品详情
       * 携带该参数表
       */
      brandId?: string;
    };
    Res: {
      "响应格式 与 品牌详情-商品列表一致": string;
    };
  };

  /**
   * 接口名：达人详情-商品列表-数据分析
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=1399
   */
  "GET/talent/product/trend": {
    Req: {
      talentSourceId: string;
      startDate: string;
      endDate: string;
      /**
       * /talent/product/trend?platform=weibo&talentSourceId=3923960539&startDate=2021-04-18&endDate=2021-04-24
       */
      eg?: string;
      platform: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 	商品类目分布
         */
        productCategoryDis: {
          面部护理: number;
          彩妆: number;
          口腔护理: number;
        };
        /**
         * 	商品合作次数分布
         */
        productCooperateDis: {
          恒颜无瑕粉底液: number;
          焕肤水: number;
          自然防晒霜: number;
          金致胶囊精华液: number;
          极光水: number;
          其他: number;
        };
      };
      e: null;
    };
  };

  /**
   * 接口名：达人详情-关联作品词云
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=1411
   */
  "GET/talent/product/keyWords": {
    Req: {
      talentSourceId: string;
      productId: string;
      platform: string;
      startDate: string;
      endDate: string;
      /**
       * /talent/product/keyWords?talentSourceId=5a82830f11be106cb33388f6&productId=10999&platform=xhs&startDate=2021-04-18&endDate=2021-04-24
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 内容词云
         */
        contentKeywords: null;
        /**
         * 评论词云
         */
        commentKeywords: {
          谷雨: number;
          原片: number;
          地方: number;
          前女友: number;
          感觉: number;
          睡觉: number;
          懒得: number;
          实习: number;
          牌子: number;
          白面: number;
          护肤: number;
          飞吻: number;
          奶罐: number;
          神似: number;
          nei: number;
          小李: number;
          友好: number;
          油皮: number;
          衣服: number;
          视频: number;
          接纳: number;
          安排: number;
          好看: number;
          李还挺: number;
          可爱: number;
          汗颜: number;
          静音: number;
          姨妈: number;
          好好: number;
          微笑: number;
          太美: number;
          见证: number;
          功课: number;
          我听: number;
          皮肤: number;
          太甜: number;
          美的: number;
          风格: number;
          环节: number;
          搞笑: number;
          活动: number;
          演双簧: number;
          可爱可: number;
          整容: number;
          萌萌哒: number;
          焦虑: number;
          面膜: number;
          偷笑: number;
          容貌: number;
          好像: number;
        };
      };
      e: null;
    };
  };

  /**
   * 接口名：达人详情-参与话题
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=1422
   */
  "GET/talent/topic/list": {
    Req: {
      platform: string;
      talentSourceId: string;
      startDate: string;
      endDate: string;
      /**
       * /talent/topic/list?platform=weibo&talentSourceId=2110705772&startDate=2021-04-24&endDate=2021-04-27
       */
      eg?: string;
      orderName?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 话题名称
         */
        name: string;
        /**
         * 话题头像
         */
        topicAvatar: string;
        /**
         * 话题id
         */
        id: number;
        /**
         * 频台
         */
        platform: string;
        /**
         * 资源id
         */
        topicSourceId: string;
        /**
         * 描述
         */
        description: string;
        /**
         * 更新时间
         */
        updateTime: string;
        /**
         * 关联达人数
         */
        accountNum: number;
        /**
         * 关联作品数
         */
        worksNum: number;
        /**
         * 关联作品互动数
         */
        interactive: string;
        /**
         * 话题浏览量
         */
        readNum: string;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：达人详情-参与话题-关联作品
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=1451
   */
  "GET/talent/topic/topicWork": {
    Req: {
      page: string;
      pageSize: string;
      paltform: string;
      topicSourceId: string;
      startDate: string;
      endDate: string;
      talentSourceId: string;
      /**
       * /talent/topic/topicWork?page=1&pageSize=1&paltform=xhs&topicSourceId=5e2b1f016d5c4e0001732593&startDate=2021-03-20&endDate=2021-04-29&talentSourceId=5e676f6c0000000001001011
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        monitorInfo: null;
        videoId: number;
        platform: string;
        videoTitle: string;
        videoKey: string;
        videoContent: string;
        videoCover: string;
        videoUrl: string;
        images: unknown[];
        like: number;
        comment: number;
        read: number;
        collect: number;
        transpond: number;
        type: number;
        createTime: string;
        talentId: string;
        talentSourceId: string;
        videoSourceId: string;
        talentNickName: string;
        keywords: string[];
        talentAvatar: string;
        talentFans: string;
        score: string;
        productTotal: number;
        interactive: number;
        category: string[];
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：达人平台报价类型选项
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=3366
   */
  "GET/talent/query/priceType": {
    Req: {
      /**
       * 平台标识
       */
      platform: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 类型id
         */
        id: number;
        /**
         * 平台标识
         */
        platform: string;
        /**
         * 报价类型名称
         */
        priceType: string;
        /**
         * 报价类型key
         */
        priceKey: string;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：达人标签筛选项接口
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=3367
   */
  "GET/talent/query/label": {
    Req: {
      /**
       * 平台标识
       */
      platform: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 内容类目
         */
        contentCategoryLabels: {
          /**
           * 标签id
           */
          id: number;
          /**
           * 名称
           */
          name: string;
          /**
           * 父级id
           */
          parentId: number;
        }[];
        /**
         * 博主人设
         */
        accountCharacterLabels: {
          id: number;
          name: string;
          parentId: number;
        }[];
        /**
         * 内容特征
         */
        worksCharacterLabels: {
          id: number;
          name: string;
          parentId: number;
        }[];
      };
      e: null;
    };
  };

  /**
   * 接口名：平台年龄段
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=3457
   */
  "GET/talent/query/age": {
    Req: {
      /**
       * xhs
       */
      platform: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        id: string;
        title: string;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：二级、三级分类信息
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=3526
   */
  "GET/talent/query/subCat": {
    Req: {
      /**
       * 默认7 美妆
       */
      parentId?: number;
    };
    Res: {
      f: number;
      m: string;
      d: {
        id: number;
        name: string;
        parentId: number;
        status: string;
        subCats: {
          id: number;
          name: string;
          parentId: number;
          status: string;
        }[];
      }[];
      e: null;
    };
  };

  /**
   * 接口名：分类品牌查询
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=3527
   */
  "GET/talent/query/catBrand": {
    Req: {
      /**
       * 默认7 美妆
       */
      catId?: number;
      /**
       * 品牌名称搜索
       */
      name?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        id: number;
        pid: number;
        name: string;
        enName: string | {};
        alias: {};
        logo: string | {};
        score: number | {};
        status: string;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：按作品关键词搜索
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=3634
   */
  "GET/talent/erec/query/work": {
    Req: {
      /**
       * 新增 搜索范围
       * TITLE_CONTENT 仅匹配作品 ， TITLE_CONTENT_COMMENT 匹配作品和评论
       */
      keywordType?: string;
      /**
       * 40423 图文为主，40424 视频为主
       */
      mainWorkType?: number;
    };
    Res: {};
  };

  /**
   * 接口名：达人导出
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=3635
   */
  "GET/talent/export": {
    Req: {
      /**
       *     BRAND 品牌模块
       *     PRODUCT 商品模块
       *     TOPIC	话题模块
       *     HOT_WORK 热词模块
       *     BASE_ACCOUNT 	达人库搜索
       *     FANS_INC_RANK	粉丝增量榜单
       *     GEO_RANK	地域榜
       *     STAR_RANK	明星榜
       *     INTERACTIVE_RANK	互动榜
       *     HOT_WORK_RANK	爆文榜
       *     MAKEUP_RANK	美妆榜
       */
      moduleType: string;
      其他参数按实际列表参数动态填入?: string;
    };
    Res: {};
  };

  /**
   * 接口名：达人单个录入
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=3740
   */
  "GET/talent/import": {
    Req: {
      url?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        id: number;
        key: string;
        sourceId: string;
        /**
         * 平台
         */
        platform: string;
        nickName: string;
        fans: number;
        like: number;
        comment: number;
        transpond: number;
        works: number;
        /**
         * 头像
         */
        talentAvatar: string;
        score: string;
        interactive: number;
        /**
         * 录入时间
         */
        insertTime: string;
        /**
         * 原始地址
         */
        talentSourceUrl: string;
        /**
         * 认证信息
         */
        authentication: string;
        /**
         * 认证类型
         */
        authType: number;
        /**
         * 签名
         */
        signature: string;
      };
      e: null;
    };
  };

  /**
   * 接口名：根据达人keys 获取达人列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=173&itf=3991
   */
  "GET/talent/query/talent": {
    Req: {
      /**
       * accountKeys json数组
       * 返回列表内达人数据格式同达人搜索列表内达人数据
       */
      accountKeys?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        talentId: number;
        talentKey: string;
        talentSourceId: string;
        platform: string;
        talentNickname: string;
        talentMcn: unknown[];
        talentAvatar: string;
        talentAuthentication: string;
        talentProvince: string;
        talentCity: string;
        authType: number;
        key: string;
        talentSignature: string;
        talentGender: number;
        fans: string;
        collect: string;
        activeFans: number;
        focusNum: number;
        read: number;
        like: string;
        comment: string;
        transpond: number;
        interactive: string;
        works: number;
        updateTime: string;
        insertTime: string;
        spider: string;
        keywords: string[];
        category: string[];
        score: string;
        talentLevel: number;
        isCollect: number;
        showcase: null;
        fansMonth: string;
        interactiveMonth: string;
        activeFansRatio: string;
        tags: unknown[];
        isPromotion: boolean;
        relationWorks: number;
        promotionWorks: number;
        promotionWorksRatio: string;
        videoTypeWorksRatio: string;
        audioTypeWorksRatio: null;
        imgtxtTypeWorksRatio: string;
        labelDatas: {
          id: number;
          parentId: number;
          name: string;
          level: number;
          keywords: null;
          display: number;
          categoryId: null;
          status: number;
          rank: null;
          subLabels: {
            id: number;
            parentId: number;
            name: string;
            level: number;
            keywords: string[];
            display: number;
            categoryId: null;
            status: number;
            rank: number;
            subLabels: unknown[];
          }[];
        }[];
        talentSourceUrl: string;
        likeAndCollect: string;
        likeAndCollectDivFans: number;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：粉丝增量榜
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=209&itf=1182
   */
  "GET/talent/rank/rise/list": {
    Req: {
      page: string;
      pageSize: string;
      /**
       * 平台
       */
      platform: string;
      /**
       * 达人类别id
       */
      accountCat: string;
      /**
       * 开始时间
       */
      startDate: string;
      /**
       * 结束时间
       */
      endDate: string;
      /**
       * /talent/rank/rise/list?page=1&pageSize=10&endDate=2021-03-09&startDate=2021-03-03&platform=weibo&accountCat=140
       */
      eg?: string;
      /**
       * sales  销量
       * rtSales 实时销量
       * price 价格
       * couponPrice    优惠价格
       * commentCount 评论数量
       * commentGoodRate  好评率
       * commentPoorRate 差评率
       * commentAverageRate 中评率
       *  worksNum 关联作品数
       */
      order?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: number;
        /**
         * key
         */
        key: string;
        /**
         * sourceId
         */
        sourceId: string;
        /**
         * 频台
         */
        platform: string;
        /**
         * 昵称
         */
        talentNick: string;
        /**
         * 头像
         */
        talentLogo: string;
        /**
         * 简介
         */
        authentication: string;
        /**
         * 类型
         */
        authType: number | string;
        /**
         * 签名
         */
        signature: string;
        /**
         * 性别
         */
        gender: number;
        /**
         * 省
         */
        province: string;
        /**
         * 市
         */
        city: string;
        /**
         * 粉丝总量
         */
        fans: number;
        /**
         * 粉丝增量
         */
        fansInc: number;
        /**
         * 粉丝增长率
         */
        score: string;
        fansIncRatio: string;
        /**
         * 判断是否关注字段 0 未关注 1 关注
         */
        isCollect: string;
      }[];
      e: {
        total: number;
        updateTime: string;
      };
    };
  };

  /**
   * 接口名：明星榜
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=209&itf=1183
   */
  "GET/talent/rank/star/list": {
    Req: {
      /**
       * 榜单类型 1:涨粉榜,2:互动数榜
       */
      type: string;
      /**
       * 平台
       */
      platform: string;
      /**
       * 页码
       */
      page: string;
      /**
       * 数量
       */
      pageSize: string;
      /**
       * 开始时间
       */
      startDate: string;
      /**
       * 结束时间
       */
      endDate: string;
      /**
       * 排序字段
       * 参照 粉丝增量榜
       */
      order?: string;
      /**
       * /talent/rank/star/list?type=1&platform=weibo&page=1&pageSize=10&startDate=2021-03-03&endDate=2021-03-09
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: number;
        /**
         * key
         */
        key: string;
        /**
         * sourceId
         */
        sourceId: string;
        /**
         * 平台
         */
        platform: string;
        /**
         * 昵称
         */
        talentNick: string;
        /**
         * 头像
         */
        talentLogo: string;
        /**
         * 简介
         */
        authentication: string;
        /**
         * 类型
         */
        authType: number;
        /**
         * 签名
         */
        signature: string;
        /**
         * 性别
         */
        gender: number;
        /**
         * 城市
         */
        province: string;
        /**
         * 市
         */
        city: string;
        /**
         * 粉丝
         */
        fans: number;
        /**
         * 粉丝增量
         */
        fansInc: number;
        /**
         * 粉丝增长率
         */
        fansIncRatio: number;
        /**
         * 互动书
         */
        interactive: number;
        /**
         * 互动数增量
         */
        interactiveInc: number;
        /**
         * 互动数增长率
         */
        interactiveIncRatio: number;
        /**
         * 热卖指数
         */
        score: string;
        /**
         *  判断是否关注字段: isCollect 0 未关注 1 关注
         */
        isCollect: string;
      }[];
      e: {
        total: number;
        updateTime: string;
      };
    };
  };

  /**
   * 接口名：地区榜
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=209&itf=1185
   */
  "GET/talent/rank/region/list": {
    Req: {
      page: string;
      pageSize: string;
      platform: string;
      /**
       * 地区
       */
      geo: string;
      startDate: string;
      endDate: string;
      /**
       * 排序字段
       * 参考粉丝增量榜
       */
      order?: string;
      /**
       * /talent/rank/region/list?platform=weibo&page=1&pageSize=10&startDate=2021-03-03&endDate=2021-03-09&geo=武汉
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: number;
        /**
         * key
         */
        key: string;
        /**
         * sourceId
         */
        sourceId: string;
        /**
         * 平台
         */
        platform: string;
        /**
         * 昵称
         */
        talentNick: string;
        /**
         * logo
         */
        talentLogo: string;
        /**
         * 认证
         */
        authentication: string;
        /**
         * 类型
         */
        authType: number;
        /**
         * 签名
         */
        signature: string;
        /**
         * 性别
         */
        gender: number;
        /**
         * 省
         */
        province: string;
        /**
         * 城市
         */
        city: string;
        fans: number;
        /**
         * 粉丝增量
         */
        fansInc: number;
        /**
         * 互动数增量
         */
        interactiveInc: number;
        /**
         * 平均粉丝增量
         */
        avgInteractive: number;
        /**
         * 热卖指数
         */
        score: string;
        /**
         *  判断是否关注字段: isCollect 0 未关注 1 关注
         */
        isCollect: string;
      }[];
      e: {
        total: number;
        updateTime: string;
      };
    };
  };

  /**
   * 接口名：互动榜
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=209&itf=3295
   */
  "GET/talent/rank/interactive/list": {
    Req: {
      /**
       * 平台
       */
      platform: string;
      /**
       * 页码
       */
      page: string;
      /**
       * 数量
       */
      pageSize: string;
      /**
       * 开始时间
       */
      startDate: string;
      /**
       * 结束时间
       */
      endDate: string;
      /**
       * 排序字段
       * 参照 粉丝增量榜
       */
      order?: string;
      /**
       * 达人类别id
       */
      accountCat?: number;
      /**
       * 1 过滤企业号
       * 0 不过滤
       * 默认0
       */
      filterCompanyAuth?: number;
      /**
       * 起始粉丝数
       */
      fansLevelFrom?: number;
      /**
       * 截至粉丝数
       */
      fansLevelTo?: number;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: number;
        /**
         * key
         */
        key: string;
        /**
         * sourceId
         */
        sourceId: string;
        /**
         * 平台
         */
        platform: string;
        /**
         * 昵称
         */
        talentNick: string;
        /**
         * 头像
         */
        talentLogo: string;
        /**
         * 简介
         */
        authentication: string;
        /**
         * 类型
         */
        authType: number;
        /**
         * 签名
         */
        signature: string;
        /**
         * 性别
         */
        gender: number;
        /**
         * 城市
         */
        province: string;
        /**
         * 市
         */
        city: string;
        /**
         * 互动数
         */
        interactive: string;
        /**
         * 互动数增量
         */
        interactiveInc: string;
        /**
         * 互动数增长率
         */
        interactiveIncRatio: number;
        /**
         * 热卖指数
         */
        score: string;
        /**
         *  判断是否关注字段: isCollect 0 未关注 1 关注
         */
        isCollect: string;
      }[];
      e: {
        total: number;
        updateTime: string;
      };
    };
  };

  /**
   * 接口名：爆文榜(仅限小红书)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=209&itf=3296
   */
  "GET/talent/rank/hotworks/list": {
    Req: {
      /**
       * 平台
       */
      platform: string;
      /**
       * 页码
       */
      page: string;
      /**
       * 数量
       */
      pageSize: string;
      /**
       * 开始时间
       */
      startDate: string;
      /**
       * 结束时间
       */
      endDate: string;
      /**
       * 排序字段
       * 参照 粉丝增量榜
       */
      order?: string;
      /**
       * 达人类别id
       */
      accountCat?: number;
      /**
       * 1 过滤企业号
       * 0 不过滤
       * 默认0
       */
      filterCompanyAuth?: number;
      /**
       * 起始粉丝数
       */
      fansLevelFrom?: number;
      /**
       * 截至粉丝数
       */
      fansLevelTo?: number;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: number;
        /**
         * key
         */
        key: string;
        /**
         * sourceId
         */
        sourceId: string;
        /**
         * 平台
         */
        platform: string;
        /**
         * 昵称
         */
        talentNick: string;
        /**
         * 头像
         */
        talentLogo: string;
        /**
         * 简介
         */
        authentication: string;
        /**
         * 类型
         */
        authType: number;
        /**
         * 签名
         */
        signature: string;
        /**
         * 性别
         */
        gender: number;
        /**
         * 城市
         */
        province: string;
        /**
         * 市
         */
        city: string;
        /**
         * 作品总量
         */
        works: string;
        /**
         * 爆文数
         */
        hotWorksCount: string;
        /**
         * 爆文率
         */
        hotWorksRatio: number;
        /**
         * 热卖指数
         */
        score: string;
        /**
         *  判断是否关注字段: isCollect 0 未关注 1 关注
         */
        isCollect: string;
      }[];
      e: {
        total: number;
        updateTime: string;
      };
    };
  };

  /**
   * 接口名：美妆榜
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=209&itf=3521
   */
  "GET/talent/rank/makeup/list": {
    Req: {
      /**
       * 平台
       */
      platform: string;
      /**
       * 页码
       */
      page: string;
      /**
       * 数量
       */
      pageSize: string;
      /**
       * 开始时间
       */
      startDate: string;
      /**
       * 结束时间
       */
      endDate: string;
      /**
       * 排序字段
       * 参照 粉丝增量榜
       */
      order?: string;
      /**
       * 达人类别id
       */
      accountCat?: number;
      /**
       * 1 过滤企业号
       * 0 不过滤
       * 默认0
       */
      filterCompanyAuth?: number;
      /**
       * 起始粉丝数
       */
      fansLevelFrom?: number;
      /**
       * 截至粉丝数
       */
      fansLevelTo?: number;
      /**
       * 品牌Id
       */
      brandId?: number;
      /**
       * 美妆分类
       */
      secondCat?: number;
      /**
       * 细分类目
       */
      thirdCat?: number;
      /**
       * 榜单类型: 1 平均互动 2 爆文数
       */
      type?: number;
    };
    Res: {
      f: number;
      m: string;
      d: {
        isCollect: number;
        talentId: number;
        key: string;
        talentSourceId: string;
        category: string[];
        platform: string;
        talentNickname: string;
        talentAvatar: string;
        talentAuthentication: string;
        authType: number;
        talentSignature: string;
        talentGender: number;
        talentProvince: string;
        talentCity: string;
        /**
         * 作品数 number/string
         */
        workCount: string;
        /**
         * 爆文数  number/string
         */
        hotCount: string;
        /**
         * 平均互动数 number/string
         */
        avgInteractive: string;
        /**
         * 热麦指数
         */
        score: number;
        /**
         * Top3作品数据
         */
        workList: {
          id: number;
          key: string;
          sourceId: string;
          platform: string;
          title: string;
          content: string;
          cover: string;
          images: string[];
          videoUrl: string;
          preRead: number;
          like: number;
          comment: number;
          collect: number;
          type: number;
          createTime: string;
          insertTime: string;
          updateTime: string;
          author: string;
          authorNick: string;
          keywords: {
            丝芙兰: number | {};
            都是: number | {};
            肯定: number | {};
            出门: number | {};
            腮红: number | {};
            眉笔: number;
            经典: number | {};
            能带: number | {};
            dior: number;
            植村秀: number | {};
            kiss: number | {};
            兰蔻菁纯: number | {};
            睫毛膏: number | {};
            cpb: number;
            遮瑕: number;
            化妆包: number;
            lamer: number | {};
            真爱: number | {};
            眼线笔: number | {};
            唇蜜: number | {};
          };
          keywordsOfficial: string;
          commentKeywords: {
            巨巨巨: number | {};
            dior: number | {};
            完美: number | {};
            cotton: number | {};
            喜欢: number;
            卧蚕笔: number | {};
            晕染: number | {};
            ysl: number | {};
            cpb: number;
            显得: number | {};
            看着: number | {};
            在线: number | {};
            品牌: number | {};
            好看: number | {};
            后台: number | {};
            不一样: number | {};
            打错: number | {};
            宝贝: number | {};
            太美: number | {};
            好好看: number | {};
            显眼: number | {};
            空瓶: number | {};
            隔离: number | {};
            滋润: number | {};
            亲爱: number | {};
            雷品: number | {};
            欧曼: number | {};
            化妆: number | {};
            眼影: number | {};
            轻盈: number | {};
            颜色: number | {};
            请问: number | {};
            淘宝: number | {};
            不到: number | {};
            唇部: number | {};
            贝玲妃: number | {};
            绝美: number | {};
            精华: number | {};
            cc: number | {};
            高光: number | {};
            姐妹: number | {};
            腮红: number | {};
            着急: number | {};
            分享: number;
            ct: number;
            睫毛膏: number | {};
            gigi: number;
            la: number | {};
            精致: number | {};
            哇塞: number | {};
          };
          category: number[];
          globalCat: number[];
          mediaCats: {
            id: number;
            platform: string;
            name: string;
            parentId: number;
            relatedId: number;
          }[];
          labels: number[];
          labelNum: number;
          score: number;
          topic: string[];
          brandIds: number[];
          productIds: unknown[];
          interactive: number;
          categoryStr: string[];
          outsideSink: boolean;
          offlineFp: number;
          commentBrandIds: number[];
        }[];
        /**
         * 关联品牌信息
         */
        brandList: {
          id: number;
          pid: number;
          name: string;
          enName: string;
          alias: {};
          logo: string;
          score: number | {};
          status: string;
        }[];
        /**
         * 标签信息
         */
        labelDatas: {
          id: number;
          parentId: number;
          name: string;
          level: number;
          keywords: null;
          categoryId: number;
          status: number;
          subLabels: {
            id: number;
            parentId: number;
            name: string;
            level: number;
            keywords: string[];
            categoryId: null;
            status: number;
            subLabels: unknown[];
          }[];
        }[];
      }[];
      e: {
        total: number;
        updateTime: string;
      };
    };
  };

  /**
   * 接口名：Top5趋势对比
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=825
   */
  "GET/brand/trend": {
    Req: {
      /**
       * 分类id
       */
      brandCategoryId: string;
      /**
       * 2020-06-29
       */
      startDate: string;
      /**
       * 2020-07-05
       */
      endDate: string;
      /**
       * /brand/trend?brandCategoryId=1&startDate=2020-12-30&endDate=2021-01-05
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 品牌名称
         */
        brandName: string;
        /**
         * 日期范围
         */
        date: string[];
        /**
         * 品牌指数
         */
        score: string[];
        /**
         * 总互动数
         */
        interactive: string[];
        /**
         * 推广达人数
         */
        talentTotal: string[];
        /**
         * 推广作品数
         */
        materialTotal: string[];
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：品牌品类
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=1083
   */
  "GET/business/product-categories": {
    Req: {
      /**
       * /business/product-categories
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 名称
         */
        name: string;
        /**
         * 分类排序
         */
        rank: number;
        /**
         * 分类id
         */
        categoryId: number;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：品牌 列表 / 搜索
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=826
   */
  "GET/brand/rank": {
    Req: {
      /**
       * 分类id
       */
      brandCategoryId: string;
      /**
       * 2020-06-29
       */
      startDate: string;
      /**
       *  2020-07-05
       */
      endDate: string;
      /**
       * 媒体平台,可选值: douyin、bilibili、kuaishou、xhs、weibo、_all
       */
      platform: string;
      /**
       * 标题
       */
      brandTitle?: string;
      /**
       * 排序名称 评分:score,品宣达人数:talent_total,作品数:material_total,互动数:interactive，投放体量：price
       */
      orderName?: string;
      page?: string;
      pageSize?: string;
      /**
       * /brand/rank?page=1&pageSize=10&startDate=2020-12-30&endDate=2021-01-05&brandTitle=D&orderName=score&brandCategoryId=1&platform=_all
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        brand_id: number;
        /**
         * 原始id
         */
        brandOriginalId: number;
        /**
         * 平台
         */
        platform: string;
        /**
         * 品牌名称
         */
        brandName: string;
        /**
         * 英文名称
         */
        brandEnName: string;
        brandCategoryId: string;
        /**
         * 推广达人数
         */
        talentTotal: number;
        /**
         * 推广作品数
         */
        materialTotal: number;
        /**
         * 互动总数
         */
        interactive: string;
        /**
         * 排名
         */
        brandRank: number;
        /**
         * logo
         */
        brandLogo: string;
        isCollect: number;
        comparType: number;
        /**
         * 热卖指数
         */
        score: string;
        /**
         * 投放体量
         */
        price: string;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：品牌详情
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=840
   */
  "GET/brand/information": {
    Req: {
      /**
       * 品牌id
       */
      brandId: string;
      /**
       * /brand/information?brandId=10356
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        brandId: number;
        /**
         * 名称
         */
        brandName: string;
        brandEnName: string;
        authType: number;
        brandLogo: string;
        score: string;
        brandStatus: string;
        platform: string;
        /**
         * 推广达人
         */
        talentTotal: number;
        /**
         * 带货达人
         */
        talentWithProductTotal: number;
        /**
         * 作品数
         */
        materialTotal: number;
        /**
         * 带货作品
         */
        materialWithProductTotal: number;
        /**
         * 获赞数
         */
        likes: string;
        like: string;
        /**
         * 总评论
         */
        comment: string;
        transpond: string;
        collect: string;
        barrage: string;
        coin: string;
        /**
         * 互动总数
         */
        interactive: string;
        materialNum: number;
        materialSales: number;
        updateTime: string;
        brandMediaAvatar: string;
        brandMediaNick: string;
        brandMediaAuthentication: string;
        brandRankInfo: string;
        /**
         * 排名
         */
        brandRank: number;
        brandRankCategory: string;
        brandRankScore: number;
        talentId: number;
        talentSourceId: string;
        /**
         * 是否收藏
         */
        isCollect: number;
        /**
         * 是否加入对比
         */
        comparType: number;
        /**
         * 官方媒体信息
         */
        mediaAccounts: string;
        /**
         * 所属所有分组
         */
        groupOfBrand: string;
        /**
         * 报备作品数
         */
        promotionWorkNum: string;
        /**
         * 作品投放体量
         */
        workPrice: string;
      };
      e: null;
    };
  };

  /**
   * 接口名：品牌总览(各平台列表)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=839
   */
  "GET/brand/query": {
    Req: {
      brandId: string;
      startDate: string;
      endDate: string;
      /**
       * 排序名称 评分:score,品宣达人数:talent_total,作品数:material_total,互动数:interactive
       */
      orderName: string;
      page: string;
      pageSize: string;
      /**
       * /brand/query?brandId=10526&startDate=2021-02-12&endDate=2021-02-18
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        brandId: number;
        /**
         * 平台
         */
        platform: string;
        brandName: string;
        brandEnName: string;
        brandOriginalId: number;
        brandCategoryId: string;
        /**
         * 推广达人
         */
        talentTotal: number;
        /**
         * 推广作品
         */
        materialTotal: number;
        /**
         * 平均互动数
         */
        materialAverageTotal: number;
        /**
         * 作品互动数
         */
        interactive: string;
        /**
         * 排名
         */
        brandRank: number;
        /**
         * logo
         */
        brandLogo: string;
        /**
         * 品牌指数
         */
        score: string;
        /**
         * 达人占比
         */
        talentRate: string;
        /**
         * 作品占比
         */
        materialRate: string;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：品牌总览 竞品top n
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=888
   */
  "GET/brand/rank/top": {
    Req: {
      brandId: string;
      startDate: string;
      endDate: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        brandId: number;
        brandOriginalId: number;
        platform: string;
        brandName: string;
        brandEnName: string;
        brandCategoryId: string;
        talentTotal: string;
        materialTotal: string;
        interactive: string;
        brandRank: number;
        brandLogo: string;
        isCollect: number;
        score: string;
        groupOfBrand: unknown[];
        relatedGoodsNum: number;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：品牌总览 达人 商品 作品 话题 top n
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=2154
   */
  "GET/brand/top": {
    Req: {
      brandId: string;
      startDate: string;
      endDate: string;
      platform: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 达人数
         */
        accountNum: number;
        /**
         * 作品数
         */
        worksNum: number;
        /**
         * 互动数
         */
        interactive: number;
        /**
         * 商品数
         */
        productNum: number;
        /**
         * 商品互动数
         */
        productInteractive: number;
        /**
         * 话题数
         */
        topicNum: number;
        /**
         * 话题互动数
         */
        topicInteractive: number;
        /**
         * 最高作品分类
         */
        topWorkCategory: {
          value: string;
          label: string;
        };
        /**
         * 最高达人分类
         */
        topKolLevel: {
          value: string;
          label: string;
        };
        /**
         * 最高粉丝性别
         */
        topFansGender: {
          value: string;
          label: string;
        };
        /**
         * 最高粉丝年龄
         */
        topFansAge: null;
        /**
         * 最高商品类别
         */
        topProductCategory: {
          value: string;
          label: string;
        };
        /**
         * 作品
         */
        worksList: {
          id: number;
          key: string;
          sourceId: string;
          platform: string;
          title: string;
          content: string;
          cover: string;
          videoUrl: string;
          read: number;
          like: number;
          comment: number;
          collect: number;
          type: number;
          createTime: string;
          insertTime: string;
          updateTime: string;
          author: string;
          authorNick: string;
          keywords: {
            活动: number | {};
            中奖: number | {};
            信息: number;
            填写: number | {};
            参与: number | {};
            评论: number | {};
            放弃: number | {};
            迪奥: number | {};
            逾期: number | {};
            笔记: number | {};
            神秘: number | {};
            抽奖: number | {};
            口红: number | {};
            福利: number;
            收藏: number | {};
            告诉: number | {};
            抽取: number | {};
            地址: number | {};
            收货: number | {};
            关注: number | {};
          };
          commentKeywords: {
            希望: number | {};
            报名: number | {};
            doge: number | {};
            姐姐: number | {};
            喜欢: number | {};
            孩子: number | {};
            飞吻: number | {};
            参加: number | {};
            许愿: number | {};
            宠爱: number | {};
            电线杆: number | {};
            抽中: number | {};
            附体: number | {};
            没中: number | {};
            品牌: number | {};
            礼物: number | {};
            作者: number | {};
            可爱: number | {};
            锦鲤: number | {};
            机会: number | {};
            满满: number | {};
            不易: number | {};
            微笑: number | {};
            抱住: number | {};
            绝缘体: number | {};
            角落: number | {};
            粉丝: number | {};
            支持: number | {};
            害羞: number | {};
            中奖: number | {};
            怎样才能: number | {};
            举手: number | {};
            冲冲: number | {};
            系统: number | {};
            求求: number | {};
            换来: number | {};
            萌萌哒: number | {};
            幸运: number | {};
            我行: number | {};
            想要: number | {};
            打卡: number | {};
            太棒: number | {};
            康康: number | {};
            偷笑: number | {};
            生活: number | {};
            福利: number | {};
            派对: number | {};
            皱眉: number | {};
            好运: number | {};
            宇宙: number | {};
          };
          category: number[];
          globalCat: number[];
          mediaCats: {
            id: number;
            platform: string;
            name: string;
            parentId: number;
            relatedId: number;
          }[];
          score: number;
          topic: string[];
          brandIds: number[];
          productIds: unknown[];
          interactive: number;
          categoryStr: string[];
          outsideSink: boolean;
        }[];
        /**
         * 达人
         */
        accountList: {
          id: string;
          accountKey: string;
          fans: number;
          works: number;
          interactive: number;
          worksWithProduct: number;
          item: null;
          likes: number;
          accountId: number;
          authType: number;
          score: number;
          nick: string;
          categoryList: string[];
          avatar: string;
          platform: string;
          like: number;
          signature: string;
          sourceId: string;
          authentication: string;
          gender: number;
          province: string;
          city: string;
        }[];
        /**
         * 商品
         */
        productList: {
          product: {
            id: number;
            brandId: number;
            name: string;
            firstCat: number;
            secondCat: number;
            thirdCat: number;
            url: string;
            picUrl: string;
            effectIds: number[];
            descibe: string;
            origin: string;
            spec: string;
            price: number;
            status: number;
            pid: number;
            brandName: string;
            brandEnName: string;
            brandLogo: string;
            brandScore: number;
            createTime: string;
            updateTime: string;
            firstCatName: string;
            secondCatName: string;
            thirdCatName: string;
          };
          platform: string;
          productId: number;
          brandId: null;
          productCats: number[];
          accountNum: number;
          accountWithProductNum: number;
          worksNum: number;
          worksWithProductNum: number;
          fans: null;
          readNum: null;
          likes: null;
          comment: null;
          transpond: null;
          collect: null;
          barrage: null;
          coin: null;
          interactive: number;
          lastestPromotionTime: string;
          score: number;
        }[];
        /**
         * 话题
         */
        topicList: {
          topic: {
            id: number;
            platform: string;
            sourceId: string;
            key: string;
            name: string;
            picUrl: string;
            authorUid: number | {};
            authorNick: string | {};
            authorAvatar: string | {};
            play: number;
            use: number;
            like: number | {};
            updateTime: string;
            score: number | {};
            statistic: {
              worksNum: number;
              accountNum: number;
              play: number;
              like: number;
              comment: number;
              collect: number;
              interactive: number;
            };
          };
          topicSourceId: string;
          accountNum: number;
          worksNum: number;
          readNum: number;
          interactive: number;
          score: number;
        }[];
      };
      e: null;
    };
  };

  /**
   * 接口名：品牌总览(平台对比分析折线图)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=844
   */
  "GET/brand/trend/platform": {
    Req: {
      /**
       * 品牌id
       */
      brandId: string;
      startDate: string;
      endDate: string;
      /**
       * /brand/trend/platform?brandId=10526&startDate=2021-02-12&endDate=2021-02-18
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 平台
         */
        platform: string;
        /**
         * 品牌指数
         */
        scoreData: string[];
        /**
         * 互动量趋势
         */
        interactiveData: string[];
        /**
         * 推广达人数
         */
        talentTotalData: string[];
        /**
         * 推广作品数
         */
        materialTotalData: string[];
        /**
         * 时间范围
         */
        dateData: string[];
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：推广达人-达人列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=835
   */
  "GET/brand/talent": {
    Req: {
      /**
       * 品牌id
       */
      brandId: string;
      /**
       * 2020-06-29
       */
      startDate: string;
      /**
       * 2020-07-05
       */
      endDate: string;
      page?: string;
      pageSize?: string;
      /**
       * 排序名称 评分:score, 品宣作品数:materialTotal, 品宣作品互动数:interactive, 粉丝:'fans', 带货作品数:'materialWithProduct', 关联商品数:productTotal,
       */
      orderName?: string;
      /**
       * /brand/talent?platform=weibo&brandId=10054&startDate=2021-01-27&endDate=2021-02-02&orderName=score&pageSize=10&page=1
       */
      eg?: string;
      /**
       * 分人分类id
       */
      accountCat?: string;
      /**
       * _all 全部 ，common 自然流量 ,promotion 商业推广
       */
      scope?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        talentId: number;
        /**
         * 粉丝数
         */
        fans: string;
        works: number;
        /**
         * 推广作品数
         */
        materialTotal: number;
        /**
         * 关联商品数
         */
        productTotal: number;
        /**
         * 推广作品互动数
         */
        interactive: string | number;
        /**
         * 带货作品数
         */
        materialWithProduct: number;
        likes: string | number;
        /**
         * 热卖指数
         */
        score: string;
        /**
         * 标题
         */
        nickName: string;
        /**
         * 标签分类
         */
        categoryList: string[];
        /**
         * 图片
         */
        avatar: string;
        platform: string;
        like: string | number;
        /**
         * 签名
         */
        signature: string;
        authentication: string;
        talentSourceId: string;
        authType: number;
        /**
         * 达人性别 1 男 2 女
         */
        talentGender: string;
        /**
         * 省
         */
        province: string;
        /**
         * 市
         */
        city: string;
        /**
         * true 商业投放 false 自然流量
         */
        isPromotion: boolean;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：推广达人-分类
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=1177
   */
  "GET/brand/talent/talentCategory": {
    Req: {
      /**
       * 平台
       */
      platform: string;
      /**
       * 	品牌ID
       */
      brandId: string;
      startDate: string;
      endDate: string;
      /**
       * /brand/talent/talentCategory?platform=xhs&brandId=11710&startDate=2021-03-02&endDate=2021-03-08
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: string | number;
        /**
         * 名称
         */
        label: string;
        /**
         * 数量
         */
        value: number;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：推广达人(关联作品)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=831
   */
  "GET/brand/talent/material": {
    Req: {
      /**
       * 2020-06-29
       */
      startDate: string;
      /**
       *  2020-07-05
       */
      endDate: string;
      page?: string;
      pageSize?: string;
      /**
       * 品牌id
       */
      brandId: string;
      /**
       * 达人id
       */
      talentId: string;
      /**
       * /brand/talent/material?platform=weibo&brandId=10054&talentId=15683799&startDate=2021-01-27&endDate=2021-02-02&orderName=score&pageSize=10&page=1
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        videoId: number;
        /**
         * 标题
         */
        videoTitle: string;
        /**
         * 内容
         */
        videoContent: string;
        /**
         * 获赞数
         */
        videoLike: number;
        /**
         * 评论数
         */
        videoComment: number;
        videoTranspond: number;
        /**
         * 图片
         */
        videoCover: string;
        /**
         * 视频地址
         */
        videoUrl: string;
        videoDynamicCover: string;
        platform: string;
        duration: number;
        createTime: string;
        videoKeywords: {
          仙境: number | {};
          真人版: number | {};
          爱丽丝: number | {};
        };
        videoCategory: unknown[];
        videoQrcode: string;
        /**
         * 热麦指数
         */
        score: string;
        brandIds: number[];
        connectCategory: unknown[];
        connectKeys: unknown[];
        /**
         * 关联商品数
         */
        productTotal: number;
        content: string;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：推广达人(关联商品)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=832
   */
  "GET/brand/talent/business": {
    Req: {
      /**
       * 2020-06-29
       */
      startDate: string;
      /**
       * 2020-07-05
       */
      endDate: string;
      page?: string;
      pageSize?: string;
      /**
       * 品牌id
       */
      brandId: string;
      /**
       * /brand/talent/business?startDate=2020-12-30&endDate=2021-01-05&page=1&pageSize=10&brandId=10008&talentId=12027045&platform=weibo
       */
      eg?: string;
      /**
       * 达人id
       */
      talentId: string;
      /**
       * 平台
       */
      platform: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 商品id
         */
        productId: number;
        /**
         * 标题
         */
        title: string;
        /**
         * 商品标题
         */
        productTitle: string;
        /**
         * 平台
         */
        platform: string;
        /**
         * 原始id
         */
        productOriginalId: string;
        shopId: string;
        merchantId: string;
        nick: string;
        shopName: string;
        productMainPicture: string;
        productLink: string;
        productPrice: number;
        /**
         * 售价
         */
        productCouponAfterPrice: number;
        /**
         * 实际价格
         */
        productOriginalPrice: number;
        productVolumes: number | string;
        stock: number;
        /**
         * 分类
         */
        categoryPath: number[];
        attributes: number[];
        channels: string[];
        /**
         * 关联作品数
         */
        materialTotal: number;
        /**
         * 关联作品互动数
         */
        interactive: number;
        /**
         * 热卖指数
         */
        score: number;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：推广达人-数据分析
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=834
   */
  "GET/brand/talent/analysis": {
    Req: {
      /**
       * 平台
       */
      platform: string;
      /**
       * 品牌id
       */
      brandId: string;
      /**
       * 2020-06-29
       */
      startDate: string;
      /**
       * 2020-07-05
       */
      endDate: string;
      /**
       * /brand/talent/analysis?brandId=10356&startDate=2020-12-30&endDate=2021-01-05&platform=_all
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 总量数据序列
         */
        talentTotalData: string[];
        /**
         * 增量数据序列
         */
        talentIncrementalData: string[];
        /**
         * 时间序列
         */
        dateData: string[];
        /**
         * 达人类型分布
         */
        categoryData: {
          美妆: number;
          美食: number;
          时尚: number;
          娱乐: number;
          情感: number;
          其他: number;
        };
        /**
         * 性别分布
         */
        genderData: {
          女: number;
          男: number;
        };
        /**
         * 年龄分布
         */
        ageData: {
          "18-24": number;
          "25-30": number;
          "31-35": number;
          "36-40": number;
          "41+": number;
          "6-17": number;
        };
        /**
         * 地域分布
         */
        geoData: {
          辽宁: number;
          湖南: number;
          河南: number;
          湖北: number;
          福建: number;
          山东: number;
          四川: number;
          江苏: number;
          浙江: number;
          广东: number;
        };
        /**
         * 达人量级分布
         */
        kolLevelCountMap: string;
        /**
         * 区域线级分布
         */
        cityLevelMap: string;
        /**
         * 城市分布
         */
        cityMap: string;
        /**
         * 省份分布
         */
        provinceMap: string;
        /**
         * 粉丝星座分布(大数据还未透出)
         */
        fansConstellationMap: string;
      };
      e: null;
    };
  };

  /**
   * 接口名：推广作品
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=830
   */
  "GET/brand/material/list": {
    Req: {
      /**
       * 2020-06-29
       */
      startDate: string;
      /**
       *  2020-07-05
       */
      endDate: string;
      /**
       * 平台
       */
      platform: string;
      /**
       * 排序字段
       * 获赞数:likes,评论数:comment
       * 互动数:interactive 关联商品数:product_total
       *
       */
      orderName: string;
      /**
       * 品牌id
       */
      brandId: string;
      page?: string;
      pageSize?: string;
      /**
       * /brand/material/list?platform=weibo&brandId=10824&startDate=2021-01-27&endDate=2021-02-02&orderName=score&pageSize=10&page=1
       */
      eg?: string;
      /**
       * 作品分类id
       */
      category?: string;
      /**
       * _all 全部 ，common 自然流量 ,promotion 商业推广
       */
      scope?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        videoId: number;
        platform: string;
        videoTitle: string;
        /**
         * 封面
         */
        videoCover: string;
        /**
         * 链接
         */
        videoUrl: string;
        images: string[];
        /**
         * 点赞 可排序
         */
        likes: string;
        /**
         * 评论 可排序
         */
        comment: string;
        /**
         * 转发 可排序
         */
        transpond: string;
        /**
         * 类型
         */
        type: number;
        /**
         * 跟新时间
         */
        createTime: string;
        talentId: string;
        /**
         * 达人昵称
         */
        talentNickName: string;
        /**
         * 关键词
         */
        keywords: string[];
        /**
         * 分类id
         */
        category: number[];
        /**
         * 达人头像
         */
        talentAvatar: string;
        /**
         * 达人粉丝
         */
        talentFans: string;
        /**
         * 评分 可排序,
         */
        score: number;
        /**
         * 关联商品数 可排序
         */
        productTotal: number;
        /**
         * 互动书
         */
        interactive: string;
        /**
         * 分类信息
         */
        categoryStr: string;
        /**
         * true 商业投放  false 自然流量
         */
        isPromotion: string;
        /**
         * true 报备  fales 不报备
         */
        isReport: string;
      }[];
      e: {};
    };
  };

  /**
   * 接口名：推广作品-分类
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=1178
   */
  "GET/brand/talent/workCategory": {
    Req: {
      /**
       * 频台
       */
      platform: string;
      /**
       * 品牌id
       */
      brandId: string;
      startDate: string;
      endDate: string;
      /**
       * /brand/talent/workCategory?platform=weibo&brandId=11710&startDate=2021-03-02&endDate=2021-03-08
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: string | number;
        /**
         * 名称
         */
        label: string;
        /**
         * 数量
         */
        value: number;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：推广作品-数据分析
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=829
   */
  "GET/brand/material/analysis": {
    Req: {
      brandId: string;
      /**
       * 2020-06-29
       */
      startDate: string;
      /**
       * 2020-07-05
       */
      endDate: string;
      /**
       * /brand/material/analysis?brandId=10008&startDate=2020-12-30&endDate=2021-01-05&platform=_all
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 总量数据序列
         */
        materialTotalData: string[];
        /**
         * 增量数据序列
         */
        materialIncrementalTotalData: string[];
        /**
         * 互动数据序列
         */
        interactiveData: string[];
        /**
         * 时间序列
         */
        dateData: string[];
        /**
         * 作品类型分布
         */
        materialCategoryData: {
          时尚: number;
          家居: number;
          美妆: number;
          健康: number;
          数码: number;
          其他: number;
        };
        /**
         * 词云
         */
        materialCommentData: {
          被子: number;
          保暖: number;
          加厚: number;
          好看: number;
          填充: number;
          其他: number;
        };
        /**
         * 作品评论词云
         */
        workCommentKeyword: string;
        /**
         * 作品内容词云
         */
        workContentKeyword: string;
        /**
         * 声量
         */
        kolLevelWorks: string;
      };
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：品牌商品-分类
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=1379
   */
  "GET/brand/product/category": {
    Req: {
      brandId: string;
      platform: string;
      startDate: string;
      endDate: string;
      /**
       * /brand/product/category?brandId=10434&platform=weibo&startDate=2021-04-12&endDate=2021-04-18
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: number;
        /**
         * 名称
         */
        label: string;
        /**
         * 数值
         */
        value: number;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：品牌商品-列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=1380
   */
  "GET/brand/product/list": {
    Req: {
      brandId: string;
      platform: string;
      startDate: string;
      endDate: string;
      productCat: string;
      /**
       * /brand/product/list?platform=weibo&startDate=2021-04-12&endDate=2021-04-18&brandId=10434&productCat=7&page=1&pageSize=10
       */
      eg?: string;
      /**
       * 搜索关键词
       */
      keyWord?: string;
    };
    Res: {
      返回参数与商品列表一致: string;
    };
  };

  /**
   * 接口名：品牌商品-数据分析
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=1381
   */
  "GET/brand/product/trend": {
    Req: {
      brandId: string;
      platform: string;
      startDate: string;
      endDate: string;
      /**
       * /brand/product/trend?brandId=10434&platform=weibo&startDate=2021-04-12&endDate=2021-04-18
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 	商品数量趋势
         */
        productNumList: number[];
        /**
         * 	日期序列
         */
        dateList: string[];
        /**
         * 	商品类别分布
         */
        productCatDist: {
          男士护肤: number;
          彩妆: number;
          身体护理: number;
        };
      };
      e: null;
    };
  };

  /**
   * 接口名：品牌详情-参与话题
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=1423
   */
  "GET/brand/topic/list": {
    Req: {
      platform: string;
      brandId: string;
      startDate: string;
      endDate: string;
      /**
       * /brand/topic/list?platform=weibo&brandId=10380&startDate=2021-03-29&endDate=2021-04-27
       */
      eg?: string;
      orderName?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        name: string;
        topicAvatar: string;
        id: number;
        platform: string;
        topicSourceId: string;
        description: string;
        updateTime: string;
        accountNum: number;
        worksNum: number;
        interactive: number;
        readNum: number;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：品牌详情-参与话题-关联作品
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=166&itf=1450
   */
  "GET/brand/topic/topicWork": {
    Req: {
      page: string;
      pageSize: string;
      paltform: string;
      topicSourceId: string;
      brandId: string;
      startDate: string;
      endDate: string;
      /**
       * /brand/topic/topicWork?page=1&pageSize=1&paltform=xhs&topicSourceId=5e2b1f016d5c4e0001732593&brandId=38758&startDate=2021-03-20&endDate=2021-04-29
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        monitorInfo: null;
        videoId: number;
        platform: string;
        videoTitle: string;
        videoKey: string;
        videoContent: string;
        videoCover: string;
        videoUrl: string;
        images: unknown[];
        like: number;
        comment: number;
        read: string;
        collect: number;
        transpond: number;
        type: number;
        createTime: string;
        talentId: string;
        talentSourceId: string;
        videoSourceId: string;
        talentNickName: string;
        keywords: string[];
        talentAvatar: string;
        talentFans: string;
        score: string;
        productTotal: number;
        interactive: number;
        category: string[];
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：达人对比详情
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=196&itf=646
   */
  "GET/follow/details/talent/startContrast": {
    Req: {
      /**
       * /follow/details/talent/startContrast?idArray[]=de28_weibo_2803301701
       */
      eg?: string;
      /**
       * 达人的key数组
       */
      "idArray[]": unknown[];
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 达人id
         */
        talentId: number;
        /**
         * 达人资源id
         */
        talentSourceId: string;
        /**
         * 平台
         */
        platform: string;
        /**
         * 昵称
         */
        talentNickname: string;
        talentMcn: unknown[];
        /**
         * 头像
         */
        talentAvatar: string;
        /**
         * 认证
         */
        talentAuthentication: string;
        /**
         * 类型
         * 1 个人 2 企业 3 金V
         */
        authType: number;
        /**
         * key值
         */
        key: string;
        /**
         * 签名
         */
        talentSignature: string;
        /**
         * 粉丝数
         */
        fans: string;
        /**
         * 活跃粉丝数
         */
        activeFans: number;
        /**
         * 关注人数
         */
        focusNum: number;
        /**
         * 阅读数
         */
        read: number;
        /**
         * 获赞数
         */
        like: string;
        /**
         * 评论数
         */
        comment: string;
        /**
         * 转发数
         */
        transpond: number;
        /**
         * 互动数
         */
        interactive: string;
        /**
         * 作品数
         */
        works: number;
        /**
         * 更新时间
         */
        updateTime: string;
        /**
         * 采集时间
         */
        insertTime: string;
        /**
         * 爬虫名称
         */
        spider: string;
        /**
         * 达人分类
         */
        category: unknown[];
        /**
         * 热卖指数
         */
        score: string;
        talentLevel: number;
        /**
         * 省
         */
        province: number;
        /**
         * 市
         */
        city: string;
        /**
         * 收藏数
         */
        collect: string;
        /**
         * 粉丝城市
         */
        fansCity: number;
        /**
         * 粉丝年龄
         */
        fansAge: unknown[];
        /**
         * 粉丝兴趣
         */
        fansInterest: {
          企业: number;
          美食: number;
          娱乐: number;
          家居: number | {};
          艺术: number;
          美妆: number;
          时尚: number;
          母婴: number | {};
          数码: number | {};
          旅游: number;
        };
        /**
         * 达人粉丝重复率
         */
        repeatRate: number;
        /**
         * 品牌合作次数
         */
        brandCount: {
          "10526": number | {};
          "13591": number;
          "15392": number | {};
          "18027": number | {};
          "18830": number;
        };
        /**
         * 品宣行业分类统计
         */
        brandCatDist: {
          "1": number;
          "2": number;
          "3": number;
          "4": number;
          "5": number;
          "6": number;
          "7": number;
          "8": number;
          "9": number;
          "10": number;
          "11": number;
          "13": number | {};
          "14": number | {};
          "15": number;
        };
        /**
         * 品宣作品数量
         */
        brandWorks: number;
        /**
         * 达人性别 性别 1：男,2:女
         */
        talentGender: string;
        /**
         * 达人年龄
         */
        talentAge: string;
        /**
         * 达人省
         */
        talentProvince: string;
        /**
         * 达人市
         */
        talentCity: string;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：达人对比详情 30/180天数据
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=196&itf=647
   */
  "POST/follow/details/data/startContrast": {
    Req: {
      /**
       * 结束日期  endDate:2020-12-17
       */
      endDate: string;
      /**
       * 开始时间  startDate:2020-12-11
       */
      startDate: string;
      /**
       * 请求的达人key数组
       */
      idArray: unknown[];
      /**
       * /follow/details/data/startContrast?idArray[]=e5ef_weibo_1642591402&idArray[]=44ab_weibo_2656274875&startDate=2021-01-04&endDate=2021-02-02
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        talentId: number;
        talentSourceId: string;
        platform: string;
        talentNickname: string;
        talentMcn: unknown[];
        talentAvatar: string;
        talentAuthentication: string;
        authType: number;
        key: string;
        talentSignature: string;
        talentGender: number;
        fans: string;
        activeFans: number;
        focusNum: number;
        read: number;
        like: string;
        comment: string;
        transpond: number;
        interactive: string;
        works: number;
        updateTime: string;
        insertTime: string;
        spider: string;
        category: unknown[];
        score: string;
        talentLevel: number;
        province: number;
        city: string;
        collect: string;
        fansCity: number;
        fansAge: unknown[];
        fansInterest: {
          企业: number;
          美食: number;
          娱乐: number;
          家居: number | {};
          艺术: number;
          美妆: number;
          时尚: number;
          母婴: number | {};
          数码: number | {};
          旅游: number;
        };
        /**
         * 达人粉丝重复率
         */
        repeatRate: number;
        /**
         * 品牌合作次数
         */
        brandCount: {
          "10526": number | {};
          "13591": number;
          "15392": number | {};
          "18027": number | {};
          "18830": number;
        };
        /**
         * 品宣行业分类统计
         */
        brandCatDist: {
          "1": number;
          "2": number;
          "3": number;
          "4": number;
          "5": number;
          "6": number;
          "7": number;
          "8": number;
          "9": number;
          "10": number;
          "11": number;
          "13": number | {};
          "14": number | {};
          "15": number;
        };
        /**
         * 品宣作品数量
         */
        brandWorks: number;
        /**
         * 内容词云
         */
        contentMap: {
          doge: number | {};
          温柔: number | {};
          理完: number | {};
          剪短: number | {};
          姐姐: number | {};
          海南: number | {};
          快乐: number | {};
          共享: number | {};
          圆满: number | {};
          种草: number;
          头发: number | {};
          到位: number | {};
          发炎: number | {};
          宝藏: number | {};
          气质: number | {};
          礼盒: number | {};
          视频: number | {};
          整理: number | {};
          省钱: number | {};
          全部都是: number | {};
          姐妹: number | {};
          推荐: number | {};
          小盒子: number | {};
          围脖: number | {};
          包包: number | {};
          包装: number | {};
          店员: number | {};
          镂空: number | {};
          仪式: number | {};
          chanel: number | {};
          自用: number | {};
          降温: number | {};
          手表: number | {};
          节日: number | {};
          la: number | {};
          速度: number | {};
          会员: number | {};
          自体: number | {};
          开玩笑: number | {};
          连轴转: number | {};
          年纪: number | {};
          疯狂: number | {};
        };
        /**
         * 近7(30/180)天评论数
         */
        comment_7: number;
        /**
         * 近7(30/180)天粉丝数
         */
        fans_7: number;
        /**
         * 近7(30/180)天作品数
         */
        works_7: number;
        /**
         * 近7(30/180)天获赞数
         */
        like_7: number;
        /**
         * 近7(30/180)天转发数
         */
        transpond_7: number;
        /**
         * 近7(30/180)天收藏数
         */
        collect_7: number;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：品牌对比详情
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=196&itf=648
   */
  "GET/follow/Details/brand/startContrast": {
    Req: {
      /**
       * 品牌对比id
       */
      "idArray[]": unknown[];
      /**
       * /follow/Details/brand/startContrast?idArray[]=10356
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        brandId: number;
        /**
         * 名称
         */
        brandName: string;
        /**
         * 英文名称
         */
        brandEnName: string;
        /**
         * 品牌指数
         */
        brandRankScore: string;
        brandScore: string | number;
        /**
         * 状态
         */
        brandStatus: string;
        /**
         * 头像
         */
        brandLogo: string;
        /**
         * 平台
         */
        platform: string;
        /**
         * 推广达人数
         */
        talentTotal: number;
        /**
         * 带货达人数
         */
        talentWithProductTotal: number;
        worksNumworksWithProductNum: number;
        /**
         * 推广作品数
         */
        materialTotal: number;
        /**
         * 带货作品数
         */
        materialWithProductTotal: number;
        likes: string;
        /**
         * 获赞总数
         */
        like: string;
        /**
         * 评论总数
         */
        comment: string;
        /**
         * 转发总数
         */
        transpond: string;
        /**
         * 收藏总数
         */
        collect: string;
        /**
         * 弹幕总数
         */
        barrage: string;
        /**
         * 投币总数
         */
        coin: string;
        /**
         * 互动总数
         */
        interactive: string;
        materialNum: number;
        materialSales: number;
        /**
         * 更新时间
         */
        updateTime: string;
        brandMediaAvatar: string;
        brandMediaNick: string;
        brandMediaAuthentication: string;
        brandRankInfo: string;
        /**
         * 排名
         */
        brandRank: number;
        /**
         * 品牌品类
         */
        brandRankCategory: string;
        /**
         * 关联达人id
         */
        talentId: string;
        talentSourceId: string;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：品牌对比详情 趋势对比
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=196&itf=649
   */
  "POST/follow/Details/statistics/statisticalData": {
    Req: {
      /**
       * 开始日期 startDate:2020-12-11
       */
      startDate: string;
      /**
       * 结束日期 startDate:2020-12-17
       */
      endDate: string;
      /**
       * 品牌的id数组
       */
      "idArray[]": unknown[];
      /**
       * /follow/Details/statistics/statisticalData?idArray[]=10356&idArray[]=10040&startDate=2021-01-04&endDate=2021-02-02
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        intervalStats: {
          /**
           * 品牌关联达人数量
           */
          accountNum: number;
          /**
           * id
           */
          brandId: number;
          /**
           * 品牌名称
           */
          brandName: string;
          /**
           * 品牌关联带货达人数量
           */
          accountWithProductNum: number;
          /**
           * 达人类型分布
           */
          accountCatCount: {
            美妆: number;
            时尚: number;
            娱乐: number | {};
          };
          /**
           * 品牌受众性别分布
           */
          genderCount: {
            女: number;
            男: number;
          };
          /**
           * 品牌受众年龄分布
           */
          ageCount: {
            "25-30": number;
            "18-24": number;
            "31-35": number;
            "6-17": number;
            "36-40": number;
            "41+": number;
          };
          /**
           * 达人量级分布
           */
          kolLevelCount: {
            尾部: number;
            Koc: number;
            中腰部: number;
            头部: number;
            明星: number;
          };
          /**
           * 关联作品类型分布
           */
          worksCatCount: {
            旅游: number | {};
            娱乐: number | {};
            美食: number;
          };
          /**
           * 作品数
           */
          worksNum: number;
          /**
           * 关联带货作品数量
           */
          worksWithProductNum: number;
          /**
           * 互动数
           */
          interactive: string;
          /**
           * 获赞数
           */
          likes: string;
          /**
           * 评论数
           */
          comment: string;
        }[];
        /**
         * 折线图部分信息
         */
        intervalTrend: {
          /**
           * 品牌名称
           */
          brandName: string;
          /**
           * 品牌 id
           */
          brandId: number;
          /**
           * 达人数量趋势序列
           */
          accountNum: number;
          /**
           * 热麦指数趋势序列
           */
          scoreData: string[];
          /**
           * 互动数趋势序列
           */
          interactiveData: string[];
          /**
           * 达人数量趋势序列
           */
          talentTotalData: string[];
          /**
           * 作品数量趋势序列
           */
          materialTotalData: string[];
          /**
           * 时间序列
           */
          dateData: string[];
        }[];
      };
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：添加分组
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=614
   */
  "POST/follow/group/groupCreate": {
    Req: {
      /**
       * 分组名称
       */
      groupingName: string;
      /**
       * 分类: 1:达人   2:品牌
       */
      category: number;
    };
    Res: {
      f: number;
      m: string;
      d: null;
      e: null;
    };
  };

  /**
   * 接口名：修改分组
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=621
   */
  "POST/follow/group/groupUpdate": {
    Req: {
      /**
       * 分组id
       */
      groupingId: number;
      /**
       * 分组名
       */
      groupingName: string;
    };
    Res: {
      f: number;
      m: string;
      d: null;
      e: null;
    };
  };

  /**
   * 接口名：删除分组
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=622
   */
  "POST/follow/group/groupDelete": {
    Req: {
      /**
       * 分组id
       */
      groupingId: number;
      /**
       * 分类名称
       */
      category: string;
    };
    Res: {
      f: number;
      m: string;
      d: null;
      e: null;
    };
  };

  /**
   * 接口名：批量添加至分组
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=623
   */
  "POST/follow/group/batchjoingroup": {
    Req: {
      /**
       * 达人或品牌id的数组
       * idArray[] = 1
       * idArray[] = 2
       */
      idArray: unknown[];
      /**
       * groupingId[] =1
       * 分组id (0为默认分组id)
       */
      groupingId: number;
      /**
       * 类别: 1:达人 2:品牌
       */
      category: number;
    };
    Res: {
      f: number;
      m: string;
      d: null;
      e: null;
    };
  };

  /**
   * 接口名：批量移除分组
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=624
   */
  "POST/follow/group/batchremovegroup": {
    Req: {
      /**
       * 达人 或 品牌id
       * id_array[] = 1
       * id_array[] = 2
       */
      idArray: unknown[];
      /**
       * grouping_id = 2
       * 分组id
       */
      groupingId: number;
      /**
       * 类别  1: 达人 2:品牌
       */
      category: number;
    };
    Res: {
      f: number;
      m: string;
      d: null;
      e: null;
    };
  };

  /**
   * 接口名：达人分组列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=632
   */
  "GET/follow/talent-group": {
    Req: {
      /**
       * category =1
       */
      category: number;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 总量
         */
        total: number;
        /**
         * 分组id
         */
        groupingId: number | {};
        /**
         * 分组名称
         */
        groupingName: string;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：达人导入
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=1173
   */
  "POST/follow/import/input": {
    Req: {
      /**
       * 分组id
       */
      groupingId: string;
      /**
       * 这里要求格式为 xls 或 xlsx
       * /follow/import/input?groupingId=3
       */
      eg?: string;
      /**
       * 文件名称
       */
      myFile: string;
    };
    Res: {};
  };

  /**
   * 接口名：导入结果列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=1175
   */
  "GET/follow/import/list": {
    Req: {
      /**
       * 分组id
       */
      groupingId: string;
      /**
       * /follow/import/list?groupingId=3&page=1&pageSize=10
       */
      eg?: string;
      page: string;
      pageSize: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: string;
        /**
         * uid
         */
        uid: string;
        /**
         * 分组id
         */
        groupingId: string;
        /**
         * 导入时间
         */
        importTime: string;
        /**
         * 总数
         */
        total: string;
        /**
         * 成功条数
         */
        success: string;
        /**
         * 标题
         */
        title: string;
        /**
         * 创建时间
         */
        createTime: null;
        /**
         * 失败条数
         */
        fail: null;
        /**
         * 类型:
         * success 为执行完成
         * import 为 正在导入
         */
        type: string;
      }[];
      e: {
        /**
         * 导入总数
         */
        total: string;
        /**
         * 正在导入数量
         */
        import: string;
      };
    };
  };

  /**
   * 接口名：失败结果导出
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=1174
   */
  "GET/follow/import/output": {
    Req: {
      /**
       * 失败信息id
       */
      id: string;
      /**
       * /follow/import/output?id=1
       */
      eg?: string;
    };
    Res: {};
  };

  /**
   * 接口名：品牌分组列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=633
   */
  "GET/follow/brand-group": {
    Req: {
      /**
       * category = 2
       */
      category: number;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 总量
         */
        total: number;
        /**
         * 分组id
         */
        groupingId: number | {};
        /**
         * 分组名称
         */
        groupingName: string;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：关注达人列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=634
   */
  "GET/follow/follow-talent": {
    Req: {
      /**
       * 根据昵称搜索
       * talentNickName = 国
       */
      talentNickName?: string;
      /**
       * 平台昵称
       * talentPlatform = xhs
       */
      talentPlatform?: string;
      /**
       * 分组id
       * groupingId= 1
       */
      groupingId?: string;
      /**
       * /follow/follow-talent?pageSize=10&page=1
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        talentId: number;
        /**
         * 资源id
         */
        talentSourceId: string;
        /**
         * 平台
         */
        platform: string;
        /**
         * 昵称
         */
        talentNickname: string;
        talentMcn: unknown[];
        /**
         * 头像
         */
        talentAvatar: string;
        /**
         * 认证信息
         */
        talentAuthentication: string;
        /**
         * 达人类型
         */
        authType: string;
        /**
         * key
         */
        key: string;
        /**
         * 达人签名
         */
        talentSignature: string;
        /**
         * 性别
         */
        talentGender: number;
        /**
         * 粉丝数
         */
        fans: string;
        /**
         * 活动粉丝数
         */
        activeFans: number;
        focusNum: number;
        read: string;
        like: string;
        comment: string;
        transpond: string;
        interactive: string;
        works: number | string;
        updateTime: string;
        insertTime: string;
        spider: string;
        keywords: string[];
        /**
         * 分类
         */
        category: string[];
        /**
         * 热卖指数
         */
        score: string;
        talentLevel: number;
        /**
         * 是否收藏
         */
        isCollect: number;
        url: string;
        /**
         * 年龄
         */
        age: number;
        /**
         * 城市
         */
        city: string | number;
        fansAge: number;
        increment: {
          fans1: number;
          works1: number;
          dynamic1: null;
          read1: null;
          like1: number;
          comment1: number;
          transpond1: number;
          collect1: null;
          barrage1: null;
          coin1: null;
          fans7: number;
          works7: number;
          dynamic7: null;
          read7: null;
          like7: number;
          comment7: number;
          transpond7: number;
          collect7: null;
          barrage7: null;
          coin7: null;
          fans30: number;
          works30: number;
          dynamic30: null;
          read30: null;
          like30: number;
          comment30: number;
          transpond30: number;
          collect30: null;
          barrage30: null;
          coin30: null;
          fans180: number | {};
          works180: number | {};
          dynamic180: null;
          read180: null;
          like180: number | {};
          comment180: number | {};
          transpond180: number | {};
          collect180: null;
          barrage180: null;
          coin180: null;
        };
        /**
         * 投币数
         */
        coin: string;
        /**
         * 弹幕数
         */
        barrage: string;
        fansProvince: string;
        fansGender: string;
        groupOfTalent: number[];
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：关注品牌列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=636
   */
  "GET/follow/follow-brand": {
    Req: {
      /**
       * 分组id 可选不填未全部搜索
       * groupingId= 1
       */
      groupingId?: string;
      /**
       * 品牌昵称
       */
      brandNickName?: string;
      /**
       * /follow/follow-brand?pageSize=10&page=1
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 品牌id
         */
        brandId: number;
        /**
         * 品牌名称
         */
        brandName: string;
        /**
         * 英文名称
         */
        brandEnName: string;
        brandRankScore: number;
        /**
         * 品牌指数
         */
        brandScore: number;
        brandStatus: string;
        brandLogo: string;
        platform: string;
        /**
         * 推广达人总数
         */
        talentTotal: string;
        talentWithProductTotal: number;
        worksNumworksWithProductNum: number;
        /**
         * 推广作品总数
         */
        materialTotal: string;
        materialWithProductTotal: number;
        likes: string;
        /**
         * 获赞数
         */
        like: string;
        /**
         * 评论数
         */
        comment: string;
        /**
         * 转发数
         */
        transpond: string;
        /**
         * 收藏数
         */
        collect: string;
        /**
         * 弹幕数
         */
        barrage: string;
        /**
         * 投币数
         */
        coin: string;
        /**
         * 投币数
         */
        interactive: string;
        materialNum: number;
        materialSales: number;
        updateTime: string;
        brandMediaAvatar: string;
        brandMediaNick: string;
        brandMediaAuthentication: string;
        brandRankInfo: string;
        brandRank: number;
        brandRankCategory: string;
        talentId: string;
        talentSourceId: string;
        groupOfBrand: number[];
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：单个达人添加关注
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=627
   */
  "GET/follow/follow-talent/addtalent": {
    Req: {
      /**
       * 达人昵称
       */
      talentNickName: string;
      /**
       * 所属平台
       */
      talentPlatform: string;
      /**
       * 分组表id
       */
      "groupingId[]": unknown[];
      /**
       * 达人id
       */
      talentId: number;
      /**
       * key值
       */
      key: string;
    };
    Res: {
      f: number;
      m: string;
      d: null;
      e: null;
    };
  };

  /**
   * 接口名：单个品牌添加关注
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=625
   */
  "PUT/follow/follow-brand/addbrand": {
    Req: {
      /**
       * 品牌id
       */
      brandId: number;
      /**
       * 品牌昵称
       */
      brandNickName: string;
      /**
       * 分组名称
       */
      "groupingId[]": unknown[];
    };
    Res: {
      f: number;
      m: string;
      d: null;
      e: null;
    };
  };

  /**
   * 接口名：单个/批量 达人取消关注
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=628
   */
  "DELETE/follow/follow-talent/deletetalent": {
    Req: {
      /**
       * idArray[] = 1
       */
      idArray: unknown[];
    };
    Res: {
      f: number;
      m: string;
      d: null;
      e: null;
    };
  };

  /**
   * 接口名：单个/批量 品牌取消关注
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=626
   */
  "DELETE/follow/follow-brand/deletebrand": {
    Req: {
      /**
       * idArray[] =1
       */
      idArray: unknown[];
    };
    Res: {
      f: number;
      m: string;
      d: null;
      e: null;
    };
  };

  /**
   * 接口名：导出excel
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=135&itf=655
   */
  "POST/follow/excel/outPut": {
    Req: {
      /**
       * 分类
       * category =1 达人 category =2 品牌
       */
      category: string;
      /**
       * 达人给key值
       * 品牌给id
       * 不传递该参数 默认导出全部
       */
      "idArray[]"?: unknown[];
      /**
       * 分组id
       * 填写改参数 导出改分组下的所有内容
       */
      groupingId?: string;
    };
    Res: {};
  };

  /**
   * 接口名：商品列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=243&itf=1347
   */
  "GET/product/list/main": {
    Req: {
      /**
       * 搜索关键词
       */
      keyWord?: string;
      /**
       * 平台
       */
      platform: string;
      /**
       * 开始时间
       */
      startDate: string;
      /**
       * 结束时间
       */
      endDate: string;
      /**
       * 分类id
       */
      productCat: string;
      /**
       * 排序字段:
       * interactive 互动数
       * score 商品指数
       * authorNum 关联达人
       * workNum 关联作品
       */
      orderName?: string;
      page?: string;
      pageSize?: string;
      /**
       * /product/list/main?startDate=2021-04-12&endDate=2021-04-18&platform=weibo&productCat=7&orderName=workNum
       */
      "eg:"?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 商品id
         */
        id: number;
        /**
         * 品牌id
         */
        brandId: number;
        /**
         * 品牌名称
         */
        brandName: string;
        /**
         * 品牌logo
         */
        brandLogo: string;
        /**
         * 商品名称
         */
        name: string;
        /**
         * 英文名
         */
        enName: string;
        /**
         * 标签数组
         */
        tag: null;
        /**
         * 商品
         */
        url: string;
        /**
         * 商品头像
         */
        productLogo: string;
        /**
         * 描述
         */
        describe: string;
        /**
         * 最近推广时间
         */
        promotionTime: string;
        /**
         * 指数
         */
        score: string | number;
        /**
         * 关联达人数
         */
        accountNum: number;
        /**
         * 关联商品数
         */
        worksNum: number;
        /**
         * 互动数
         */
        interactive: number | string;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：商品列表-分类
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=243&itf=1368
   */
  "GET/product/list/category": {
    Req: {
      /**
       * /product/list/category
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 一级id
         */
        id: number;
        /**
         * 名称
         */
        name: string;
        parentId: number;
        /**
         * 状态
         */
        status: number;
        rank: number;
        /**
         * 二级信息
         */
        child: {
          /**
           * id
           */
          id: number;
          /**
           * 名称
           */
          name: string;
          parentId: number;
          status: number;
        }[];
      }[];
      e: null;
    };
  };

  /**
   * 接口名：商品详情
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=243&itf=1348
   */
  "GET/product/info/detail/main": {
    Req: {
      id: string;
      /**
       * /product/info/detail/main?id=21368
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: number;
        /**
         * 品牌id
         */
        brandId: number;
        /**
         * 商品名称
         */
        name: string;
        /**
         * 英文名称
         */
        enName: string;
        /**
         * 标签
         */
        tag: string[];
        /**
         * 一级分类名称
         */
        firstCatName: string;
        /**
         * 二级分类名称
         */
        secondCatName: string;
        /**
         * 三级分类名称
         */
        thirdCatName: string;
        /**
         * url
         */
        url: string;
        /**
         * 商品logo
         */
        productLogo: string;
        /**
         * 描述
         */
        descibe: string;
        /**
         * 品牌logo
         */
        brandLogo: string;
        /**
         * 功效(数组)
         */
        effectNames: string;
        /**
         * 最近更新时间
         */
        promotionTime: string;
        /**
         * 关联达人数
         */
        accountNum: number;
        /**
         * 关联作品数
         */
        worksNum: number;
        /**
         * 互动数
         */
        interactive: string;
        /**
         * 关联达人带货商品数
         */
        accountWithProductNum: number;
        /**
         * 关联带货作品数
         */
        worksWithProductNum: number;
        /**
         * 获赞数
         */
        likes: string;
        /**
         * 评论数
         */
        comment: string;
        /**
         * 报备作品数
         */
        promotionWorkNum: string;
        /**
         * 作品投放体量
         */
        workPrice: string;
      };
      e: null;
    };
  };

  /**
   * 接口名：商品详情-数据概览(平台概览)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=243&itf=1349
   */
  "GET/product/info/detail/viewPlatform": {
    Req: {
      /**
       * 商品id
       */
      id: string;
      startDate: string;
      endDate: string;
      /**
       * /product/info/detail/viewPlatform?id=10071&startDate=2021-04-12&endDate=2021-04-18
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 平台
         */
        platform: string;
        /**
         * 关联达人数
         */
        accountNum: number;
        /**
         * 关联作品数
         */
        worksNum: number;
        /**
         * 互动数
         */
        interactive: number;
        /**
         * 指数
         */
        score: string;
        /**
         * 平均互动数
         */
        averageInteractive: number;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：商品详情-数据概览(平台趋势)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=243&itf=1390
   */
  "GET/product/info/detail/viewTrend": {
    Req: {
      id: string;
      startDate: string;
      endDate: string;
      /**
       * /product/info/detail/viewTrend?id=15269&startDate=2021-04-12&endDate=2021-04-18
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 平台
         */
        platform: string;
        /**
         * 商品指数序列
         */
        scoreDate: null;
        /**
         * 互动数序列
         */
        interactiveDate: null;
        /**
         * 关联达人数序列
         */
        accountNumDate: null;
        /**
         * 关联作品数序列
         */
        worksNumDate: null;
        /**
         * 时间序列
         */
        dateDate: null;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：商品详情-关联达人(分类)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=243&itf=1392
   */
  "GET/product/info/detail/talentCategory": {
    Req: {
      id: string;
      platform: string;
      startDate: string;
      endDate: string;
      /**
       * /product/info/detail/talentCategory?id=25935&startDate=2021-04-12&endDate=2021-04-18&platform=weibo
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        id: number;
        /**
         * 名称
         */
        label: string;
        /**
         * 数量
         */
        value: number;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：商品详情-关联达人(列表)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=243&itf=1350
   */
  "GET/product/info/detail/talent": {
    Req: {
      id: string;
      startDate: string;
      endDate: string;
      /**
       * 达人分类id
       */
      accountCat: string;
      platform: string;
      /**
       * 粉丝数: fans
       * 关联作品数: works
       * 指数: 待定
       */
      orderName?: string;
      page: string;
      pageSize: string;
      /**
       * /product/info/detail/talent?platform=weibo&id=25935&accountCat=143&startDate=2021-04-18&endDate=2021-04-24&page=1&pageSize=10
       */
      eg?: string;
      /**
       * _all 全部(默认) ，common 自然流量 ,promotion 商业推广
       */
      scope?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        talentId: number;
        /**
         * 粉丝数
         */
        fans: string;
        /**
         * 作品数
         */
        works: number;
        /**
         * 互动书
         */
        interactive: number;
        /**
         * 获赞数
         */
        likes: number;
        /**
         * 指数
         */
        score: string;
        /**
         * 平台
         */
        platform: string;
        /**
         * 昵称
         */
        nickName: string;
        /**
         * 头像
         */
        avatar: string;
        /**
         * 签名
         */
        signature: string;
        /**
         * 认证信息
         */
        authentication: string;
        /**
         * 资源id
         */
        talentSourceId: string;
        /**
         * 类型
         */
        authType: number;
        /**
         * 性别
         */
        talentGender: number;
        /**
         * 省
         */
        province: string;
        /**
         * 市
         */
        city: string;
        /**
         * 分类信息
         */
        categoryList: null;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：商品详情-关联达人(数据分析)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=243&itf=1352
   */
  "GET/product/info/detail/talentAnalysis": {
    Req: {
      id: string;
      platform: string;
      startDate: string;
      endDate: string;
      /**
       * /product/info/detail/talentAnalysis?id=25935&startDate=2021-04-12&endDate=2021-04-18&platform=weibo
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 达人数量趋势
         */
        accountNumList: string[];
        /**
         * 	达人数量增量趋势
         */
        accountIncrNumList: string[];
        /**
         * 粉丝年龄
         */
        fansAgeMap: {
          "18-24": number;
          "25-30": number;
          "31-35": number;
          "36-40": number;
          "41+": number;
          "6-17": number;
        };
        /**
         * 时间
         */
        dateList: string[];
        /**
         * 粉丝性别分布
         */
        fansGenderMap: {
          女: number;
          男: number;
        };
        /**
         * 粉丝城市
         */
        fansProvinceMap: {
          山东: number;
          福建: number;
          辽宁: number;
          广东: number;
          四川: number;
          陕西: number;
          浙江: number;
          湖北: number;
          湖南: number;
          江苏: number;
        };
        /**
         * 粉丝市分布
         */
        fansCityMap: {
          成都: number;
          上海: number;
          广州: number;
          沈阳: number;
          金华: number;
          杭州: number;
          武汉: number;
          北京: number;
          深圳: number;
          南京: number;
        };
        /**
         * 粉丝城市线级分布
         */
        fansCityLevelMap: {
          五线: number;
          一线: number;
          新一线: number;
          二线: number;
          四线: number;
          三线: number;
        };
        /**
         * 达人类型分布
         */
        talentCategory: unknown[];
        /**
         * 达人量级分布
         */
        talentMagnitude: {
          全部: {
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          美妆: {
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
        };
      };
      e: null;
    };
  };

  /**
   * 接口名：商品详情-关联作品(分类)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=243&itf=1395
   */
  "GET/product/info/detail/workCategory": {
    Req: {
      id: string;
      startDate: string;
      endDate: string;
      platform: string;
      /**
       * /product/info/detail/workCategory?id=25935&startDate=2021-04-12&endDate=2021-04-18&platform=weibo
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        id: number;
        /**
         * 名称
         */
        label: string;
        /**
         * 值
         */
        value: number;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：商品详情-关联作品(列表)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=243&itf=1353
   */
  "GET/product/info/detail/work": {
    Req: {
      startDate: string;
      endDate: string;
      productIds: unknown[];
      platform: string;
      category?: string;
      /**
       * /product/info/detail/work?startDate=2021-04-12&endDate=2021-04-18&productIds[]=25935&platform=weibo&category=143
       */
      eg?: string;
      /**
       * 达人详情-商品作品列表 传递
       */
      talentSourceId?: string;
      /**
       * _all 全部(默认) ，common 自然流量 ,promotion 商业推广
       */
      scope?: string;
    };
    Res: {
      "返回参数与 品牌详情-推广作品参数一致": string;
    };
  };

  /**
   * 接口名：商品详情-关联作品(数据分析)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=243&itf=1354
   */
  "GET/product/info/detail/workAnalysis": {
    Req: {
      startDate: string;
      endDate: string;
      id: string;
      platform: string;
      /**
       * /product/info/detail/workAnalysis?startDate=2021-04-12&endDate=2021-04-18&id=25935&platform=weibo
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 作品数量趋势
         */
        workNumList: string[];
        /**
         * 作品互动数趋势
         */
        interactiveList: string[];
        /**
         * 作品评论词云
         */
        workCommentKeyword: unknown[];
        /**
         * 作品内容词云
         */
        workContentKeyword: {
          到手: number;
          浏览器: number;
          适合: number;
          返回: number;
          先点: number;
          ios: number;
          纤细: number;
          洗发水: number;
          右上角: number;
        };
        /**
         * 作品类型分布
         */
        worksCategory: unknown[];
        /**
         * 作品量级分布
         */
        worksMagnitude: {
          全部: {
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          美妆: {
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
        };
        /**
         * 作品增量
         */
        workIncrNumList: string;
      };
      e: null;
    };
  };

  /**
   * 接口名：添加监控
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=211&itf=1196
   */
  "GET/monitor/monitor/add": {
    Req: {
      startTime: string;
      endTime: string;
      talentUrl: string;
      keyWord: string;
      /**
       * /monitor/monitor/add?startTime=2021-03-11 14:16:00&endTime=2021-03-11 20:17:00&talentUrl=https://www.weibo.com/u/2656274875&keyWord=老人&key=44ab_weibo_2656274875
       */
      eg?: string;
      /**
       * 达人key
       */
      key: string;
    };
    Res: {
      f: number;
      m: string;
      d: null;
      e: null;
    };
  };

  /**
   * 接口名：更新监控
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=211&itf=1197
   */
  "GET/monitor/monitor/update": {
    Req: {
      /**
       * taskId
       * 监控任务id
       */
      taskId: string;
      startTime?: string;
      endTime?: string;
      keyWord?: string;
      /**
       * /monitor/monitor/update?startTime=2021-03-11 14:16:00&endTime=2021-03-11 20:17:00&keyWord=老人&taskId=1370256185940377600
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: null;
      e: null;
    };
  };

  /**
   * 接口名：监控任务列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=211&itf=1198
   */
  "GET/monitor/monitor/list": {
    Req: {
      /**
       * 关键词搜索
       */
      keyWord?: string;
      /**
       * 1 暂未发布内容
       * 2 监控中
       * 3 监控结束
       * 4 未检测到作品
       */
      status?: string;
      /**
       * /monitor/monitor/list
       */
      eg?: string;
      pageSize?: string;
      page?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        "0": {
          /**
           * id
           */
          id: number;
          /**
           * 作品url
           */
          url: number;
          /**
           * 平台
           */
          platform: number;
          /**
           * 监控开始时间
           */
          monitorStartTime: string;
          /**
           * 用户id
           */
          userId: string;
          /**
           * 监控关键词
           */
          keyWord: number;
          /**
           * 状态
           * 1 暂未发布内容 2 监控中 3 监控结束 4 未检测到作品
           */
          status: string;
          /**
           * 监控作品信息
           */
          work: {
            /**
             * 标题
             */
            title: string;
            /**
             * 内容
             */
            content: string;
            /**
             * 时间
             */
            createTime: string;
          }[];
          /**
           * 监控结束时间
           */
          monitorEndTime: string;
          /**
           * 作品key
           */
          workKey: string;
          /**
           * 监控任务id
           */
          taskId: string;
        };
      };
      e: null;
    };
  };

  /**
   * 接口名：作品详情-监控趋势(天级别)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=211&itf=1169
   */
  "GET/material/monitor/trend/day": {
    Req: {
      /**
       * taskId
       */
      taskId: string;
      /**
       * /material/monitor/trend/day?taskId=1371758166622208000
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 总量时间序列
         */
        dateList: string[];
        /**
         * 获赞
         */
        likeList: number[];
        /**
         * 评论
         */
        commentList: number[];
        /**
         * 收藏
         */
        collectList: string[];
        /**
         * 增量时间序列
         */
        dateIncrList: string[];
        /**
         * 获赞增
         */
        likeIncrList: number[];
        /**
         * 评论增
         */
        commentIncrList: number[];
        /**
         * 收藏曾
         */
        collectIncrList: number[];
      };
      e: null;
    };
  };

  /**
   * 接口名：作品详情-监控趋势(小时级别)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=211&itf=1170
   */
  "GET/material/monitor/trend/hour": {
    Req: {
      /**
       * taskId
       */
      taskId: string;
      /**
       * /material/monitor/trend/hour?taskId=1372131252949352448
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 总量时间序列
         */
        dateList: string[];
        /**
         * 获赞
         */
        likeList: number[];
        /**
         * 评论
         */
        commentList: number[];
        /**
         * 收藏
         */
        collectList: string[];
        /**
         * 增量时间
         */
        dateIncrList: string[];
        /**
         * 获赞增
         */
        likeIncrList: number[];
        /**
         * 评论增
         */
        commentIncrList: number[];
        /**
         * 收藏增
         */
        collectIncrList: number[];
      };
      e: null;
    };
  };

  /**
   * 接口名：话题列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=249&itf=1410
   */
  "GET/topic/list/main": {
    Req: {
      startDate: string;
      endDate: string;
      platform: string;
      page: string;
      pageSize: string;
      orderName?: string;
      keyword?: string;
      /**
       * /topic/list/main?platform=weibo&startDate=2021-04-30&endDate=2021-05-06&page=1&pageSize=3
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        id: number;
        platform: string;
        sourceId: string;
        key: string;
        name: string;
        topicUrl: string;
        /**
         * 原创总人数
         */
        topicOrigAuthorNum: number;
        /**
         *
         * 关联作品总数
         *
         */
        topicWorksNum: number;
        /**
         * 参与达人数
         *
         */
        accountNum: number;
        /**
         * 达人作品数
         *
         */
        worksNum: number | string;
        /**
         * 作品互动数
         *
         */
        interactive: number;
        /**
         * 浏览量
         */
        readNum: string;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：话题详情
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=249&itf=1439
   */
  "GET/topic/info/detail/main": {
    Req: {
      /**
       * 话题资源id
       */
      sourceId: string;
      platform: string;
      /**
       * /topic/info/detail/main?sourceId=f69bb377f2ca6ad031c27e8ccba7f63b&platform=weibo
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: number;
        platform: string;
        sourceId: string;
        /**
         * 头像
         */
        topicAvatar: string;
        /**
         * 名称
         */
        name: string;
        /**
         * 原创总人数
         */
        origAuthorNum: string;
        /**
         * 关联作品数
         */
        relationWorksNum: string;
        /**
         * 浏览量
         */
        viewsNum: string;
        /**
         * 达人作品数
         */
        talentWorksNum: string;
        /**
         * 参与达人数
         */
        pratInTalentNum: number;
        /**
         * 作品互动数
         */
        interactive: string;
      };
      e: null;
    };
  };

  /**
   * 接口名：话题详情-数据概览
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=249&itf=1442
   */
  "GET/topic/info/detail/view": {
    Req: {
      sourceId: string;
      platform: string;
      startDate: string;
      endDate: string;
      /**
       * /topic/info/detail/view?sourceId=f69bb377f2ca6ad031c27e8ccba7f63b&platform=weibo&startDate=2021-03-20&endDate=2021-03-30
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 时间序列
         */
        dateList: string[];
        /**
         * 	参与达人总量序列
         */
        origAuthorNumList: number[];
        /**
         * 参与达人数量增量序列
         */
        origAuthorIncrNumList: number[];
        /**
         * 关联作品总量序列
         */
        worksNumList: number[];
        /**
         * 关联作品增量序列
         */
        worksIncrNumList: number[];
        /**
         * 浏览量总量序列
         */
        readNumList: number[];
        /**
         * 浏览量增量序列
         */
        readIncrNumList: number[];
        /**
         * 新增原创人数
         */
        increaseOriginAuthor: string;
        /**
         * 新增作品数量
         */
        increaseWorksNum: string;
        /**
         * 新增浏览量
         */
        increaseReadNum: string;
      };
      e: null;
    };
  };

  /**
   * 接口名：话题详情-参与达人-分类
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=249&itf=1443
   */
  "GET/topic/info/detail/talentCategory": {
    Req: {
      sourceId: string;
      platform: string;
      startDate: string;
      endDate: string;
      /**
       * /topic/info/detail/talentCategory?platform=weibo&sourceId=02889605e8a78d5c75456e30a8020332&startDate=2021-04-29&endDate=2021-05-05
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        id: number;
        label: string;
        value: number;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：话题详情-参与达人列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=249&itf=1444
   */
  "GET/topic/info/detail/talentList": {
    Req: {
      platform: string;
      startDate: string;
      endDate: string;
      /**
       * 话题sourceID
       */
      sourceId: string;
      page: string;
      pageSize: string;
      /**
       * 达人分类id
       */
      accountCat: string;
      /**
       * /topic/info/detail/talentList?startDate=2021-04-29&endDate=2021-05-05&platform=weibo&sourceId=02889605e8a78d5c75456e30a8020332&page=1&pageSize=1&accountCat=145
       */
      eg?: string;
      orderName?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        talentId: number;
        fans: string;
        works: number;
        interactive: number;
        likes: number;
        score: string;
        platform: string;
        nickName: string;
        avatar: string;
        signature: string;
        authentication: string;
        talentSourceId: string;
        authType: string;
        talentGender: number;
        province: string;
        city: string;
        categoryList: string[];
      }[];
      e: null;
    };
  };

  /**
   * 接口名：话题详情-参与达人-关联作品
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=249&itf=1446
   */
  "GET/topic/info/detail/relationWork": {
    Req: {
      topicSourceId: string;
      platform: string;
      startDate: string;
      endDate: string;
      talnetSourceId: string;
      pageSize: string;
      page: string;
      orderName?: string;
      /**
       * /topic/info/detail/relationWork?topicSourceId=5e2b1f016d5c4e0001732593&platform=xhs&startDate=2021-03-20&endDate=2021-04-29&talnetSourceId=5e676f6c0000000001001011&pageSize=1&orderName=score&page=1
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        monitorInfo: null;
        videoId: number;
        platform: string;
        videoTitle: string;
        videoKey: string;
        videoContent: string;
        videoCover: string;
        videoUrl: string;
        images: unknown[];
        likes: number;
        like: number;
        comment: number;
        read: string;
        collect: number;
        transpond: number;
        type: number;
        createTime: string;
        talentId: string;
        sourceId: string;
        videoSourceId: string;
        talentNickName: string;
        keywords: string[];
        talentAvatar: string;
        talentFans: string;
        score: string;
        productTotal: number;
        interactive: number;
        category: string[];
      }[];
      e: null;
    };
  };

  /**
   * 接口名：话题详情-参与达人-数据概览
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=249&itf=1445
   */
  "GET/topic/info/detail/talentTrend": {
    Req: {
      sourceId: string;
      platform: string;
      startDate: string;
      endDate: string;
      /**
       * /topic/info/detail/talentTrend?sourceId=f69bb377f2ca6ad031c27e8ccba7f63b&platform=weibo&startDate=2021-04-21&endDate=2021-04-27
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 达人数量趋势
         */
        accountNumList: number[];
        /**
         * 达人数量增量趋势
         */
        accountIncrNumList: number[];
        /**
         * 时间序列
         */
        dateList: string[];
        /**
         * 达人分类分布比例
         */
        accountCatMap: null;
        /**
         * 性别分布
         */
        genderMap: null;
        /**
         * 年龄分布
         */
        ageMap: unknown[];
        /**
         * 地域分布
         */
        geoMap: unknown[];
        /**
         * 粉丝性别分布
         */
        fansGenderMap: null;
        /**
         * 粉丝年龄分布
         */
        fansAgeMap: unknown[];
        /**
         * 粉丝省分布
         */
        fansProvinceMap: unknown[];
        /**
         * 粉丝市级分布
         */
        fansCityMap: unknown[];
        /**
         * 城市量级分布
         */
        fansCityLevelMap: null;
        /**
         * 粉丝星座分布
         */
        fansConstellationMap: unknown[];
        /**
         * 达人分类
         */
        talentCategory: unknown[];
        /**
         * 达人量级
         */
        talentMagnitude: unknown[];
      };
      e: null;
    };
  };

  /**
   * 接口名：话题详情-关联作品-分类
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=249&itf=1447
   */
  "GET/topic/info/detail/workCategory": {
    Req: {
      sourceId: string;
      platform: string;
      startDate: string;
      endDate: string;
      /**
       * /topic/info/detail/workCategory?sourceId=f69bb377f2ca6ad031c27e8ccba7f63b&platform=weibo&startDate=2021-04-22&endDate=2021-04-28
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        id: number;
        label: string;
        value: number;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：话题详情-关联作品列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=249&itf=1448
   */
  "GET/topic/info/detail/workList": {
    Req: {
      topicSourceId: string;
      platform: string;
      page: string;
      pageSize: string;
      /**
       * /topic/info/detail/workList?topicSourceId=5e2b1f016d5c4e0001732593&platform=xhs&page=1&pageSize=1
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        monitorInfo: null;
        videoId: number;
        platform: string;
        videoTitle: string;
        videoKey: string;
        videoContent: string;
        videoCover: string;
        videoUrl: string;
        images: unknown[];
        likes: number;
        like: number;
        comment: number;
        read: string;
        collect: number;
        transpond: number;
        type: number;
        createTime: string;
        talentId: string;
        sourceId: string;
        videoSourceId: string;
        talentNickName: string;
        keywords: string[];
        talentAvatar: string;
        talentFans: string;
        score: string;
        productTotal: number;
        interactive: number;
        category: string[];
      }[];
      e: null;
    };
  };

  /**
   * 接口名：话题详情-关联作品-数据概览
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=249&itf=1449
   */
  "GET/topic/info/detail/workTrend": {
    Req: {
      sourceId: string;
      platform: string;
      startDate: string;
      endDate: string;
      /**
       * /topic/info/detail/workTrend?sourceId=f69bb377f2ca6ad031c27e8ccba7f63b&platform=weibo&startDate=2021-04-22&endDate=2021-04-28
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        workNumList: number[];
        workIncrNumList: number[];
        interactiveList: number[];
        dateList: string[];
        workCategoryMap: {
          其他: number;
          娱乐: number;
          艺术: number;
          情感: number;
          企业: number;
          美食: number;
          社会: number;
          文化: number;
          美妆: number;
          体育: number;
          搞笑: number;
          家居: number;
          时尚: number;
          健康: number;
          教育: number;
          旅游: number;
          萌宠: number;
          科技: number;
        };
        workCommentKeyword: {
          梦想: number;
          决赛: number;
          历经: number;
          闪烁: number;
          油管: number;
          专访: number;
          喜欢: number;
          中国日报: number;
          加油: number;
          偶像: number;
          百变: number;
          张嘉元: number;
          可期: number;
          花岛: number;
          是你: number;
          天生: number;
          高卿尘: number;
          好看: number;
          可爱: number;
          顶峰: number;
          老师: number;
          ak: number;
          宝贝: number;
          张星特: number;
          宇野: number;
          引力: number;
          耀眼: number;
          断层: number;
          努力: number;
          播放: number;
          构筑: number;
          米卡: number;
          闪耀: number;
          好听: number;
          期待: number;
          冲冲: number;
          花路: number;
          常驻: number;
          尹浩宇: number;
          谢谢: number;
          刘彰: number;
          第一: number;
          绝美: number;
          光芒: number;
          刘宇: number;
          高位: number;
          门面: number;
          rikimaru: number;
          创造: number;
          call: number;
          人间: number;
          选手: number;
          井汲: number;
          未来: number;
          舞台: number;
          ace: number;
          希望: number;
          感觉: number;
          doge: number;
          伯远: number;
          少年: number;
          出道: number;
          人气: number;
          俞更寅: number;
          吴宇恒: number;
          奇迹: number;
          全能: number;
          不错: number;
          周柯宇: number;
          泰德混: number;
          实力: number;
          甘望星: number;
          唯一: number;
          支持: number;
          世界观: number;
          恭喜: number;
          vocal: number;
          相见: number;
          开心: number;
          派派: number;
          快乐: number;
          santa: number;
          值得: number;
          patrick: number;
          成团: number;
          关注: number;
          毕业: number;
          奥斯卡: number;
          弟弟: number;
          田力丸: number;
          感谢: number;
          cgtn: number;
          数据: number;
          张欣尧: number;
          力丸: number;
          多重: number;
          舞蹈: number;
          任胤蓬: number;
          林墨: number;
          世界: number;
        };
        workContentKeyword: {
          正式: number;
          决赛: number;
          专访: number;
          时刻: number;
          战队: number;
          喜欢: number;
          加油: number;
          偶像: number;
          底气: number;
          张嘉元: number;
          男孩: number;
          高卿尘: number;
          开启: number;
          宿舍: number;
          老师: number;
          可爱: number;
          ak: number;
          挑战: number;
          张星特: number;
          朋友: number;
          娱乐: number;
          直播: number;
          胡烨: number;
          倒计时: number;
          模样: number;
          努力: number;
          米卡: number;
          首席: number;
          期待: number;
          王嘉尔: number;
          下班: number;
          表情: number;
          尹浩宇: number;
          八卦: number;
          刘彰: number;
          表现: number;
          第一: number;
          成长: number;
          精彩: number;
          刘宇: number;
          微博: number;
          回顾: number;
          创造: number;
          call: number;
          选手: number;
          井汲: number;
          未来: number;
          造型: number;
          舞台: number;
          希望: number;
          海星: number;
          感觉: number;
          纪念册: number;
          伯远: number;
          少年: number;
          少女: number;
          利路修: number;
          回家: number;
          出道: number;
          创始人: number;
          俞更寅: number;
          吴宇恒: number;
          视频: number;
          周柯宇: number;
          音乐: number;
          时间: number;
          实力: number;
          排名: number;
          甘望星: number;
          学员: number;
          粉丝: number;
          节目: number;
          表演: number;
          恭喜: number;
          腾讯视频: number;
          开心: number;
          采访: number;
          花絮: number;
          快乐: number;
          追星: number;
          明星: number;
          成团: number;
          关注: number;
          名字: number;
          结束: number;
          硬糖: number;
          毕业: number;
          solo: number;
          弟弟: number;
          奥斯卡: number;
          主题曲: number;
          感谢: number;
          总决赛: number;
          撑腰: number;
          带来: number;
          张欣尧: number;
          力丸: number;
          舞蹈: number;
          任胤蓬: number;
          林墨: number;
        };
        worksCategory: {
          娱乐: {
            countRate: number;
            InterRate: number;
          };
          艺术: {
            countRate: number;
            InterRate: number;
          };
          情感: {
            countRate: number;
            InterRate: number;
          };
          企业: {
            countRate: number;
            InterRate: number;
          };
          美食: {
            countRate: number;
            InterRate: number;
          };
        };
        worksMagnitude: {
          全部: {
            中腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            明星: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          娱乐: {
            中腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            明星: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          艺术: {
            中腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          情感: {
            中腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          企业: {
            中腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          美食: {
            中腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          社会: {
            中腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          文化: {
            中腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          体育: {
            中腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            明星: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          搞笑: {
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          美妆: {
            中腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          时尚: {
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          家居: {
            中腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          健康: {
            中腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          旅游: {
            中腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          教育: {
            中腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          科技: {
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          萌宠: {
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          其他: {
            中腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            明星: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
        };
      };
      e: null;
    };
  };

  /**
   * 接口名：监控关键词列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=265&itf=1542
   */
  "GET/keyword/index/list": {
    Req: {
      /**
       * 状态 1:生成中 3:已生成 4:生成失败
       */
      status?: string;
      /**
       * 搜索内容
       */
      searchName?: string;
      /**
       * /keyword/index/list?status=1
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        id: number;
        /**
         * 名称
         */
        name: string;
        /**
         * 关键词
         */
        keywords: string[];
        /**
         * 屏蔽关键词
         */
        excludeKeywords: string[];
        /**
         * 查询类型: 2 全量 1 部分
         */
        type: number;
        /**
         * 任务id
         */
        taskId: string;
        /**
         * 开始时间
         */
        startDate: string;
        /**
         * 结束时间
         */
        endDate: string;
        /**
         * 报告状态 1:生成中 3:已生成 4:生成失败
         */
        status: number;
        /**
         * 创建时间
         */
        createTime: string;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：监控上限接口
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=265&itf=1591
   */
  "GET/keyword/index/count": {
    Req: {};
    Res: {
      f: number;
      m: string;
      d: null;
      e: null;
    };
  };

  /**
   * 接口名：监控信息详情
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=265&itf=1547
   */
  "GET/keyword/index/info": {
    Req: {
      /**
       * 任务id
       */
      taskId: string;
      /**
       * /keyword/index/info?taskId=1397101666431533056
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        id: number;
        name: string;
        keywords: string[];
        excludeKeywords: string[];
        type: number;
        taskId: string;
        startDate: string;
        endDate: string;
        status: number;
        createTime: string;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：添加关键词监控
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=265&itf=1541
   */
  "POST/keyword/index/add": {
    Req: {
      /**
       * 任务名称
       */
      reportName: string;
      /**
       * 查询类型: 1 部分 2 全量
       */
      type: string;
      /**
       * 搜索关键词
       */
      keywords: unknown[];
      /**
       * 屏蔽关键词
       */
      excludeKeywords?: string;
      /**
       * 开始时间
       */
      startDate: string;
      /**
       * 结束时间
       */
      endDate: string;
      /**
       * reportName:先生千古,国士无双
       * type:1
       * startDate:2021-05-17
       * endDate:2021-05-26
       * keywords[]:袁隆平
       * keywords[]:千古
       * excludeKeywords[]:侮辱
       * excludeKeywords[]:谩骂
       */
      eg?: string;
      /**
       * json包，添加 filterComment 过滤评论关键词
       */
      filter?: string;
    };
    Res: {
      f: number;
      m: string;
      d: null;
      e: null;
    };
  };

  /**
   * 接口名：报告详情-达人列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=265&itf=1567
   */
  "GET/keyword/info/talent": {
    Req: {
      page: string;
      pageSize: string;
      platform: string;
      /**
       * 任务id
       */
      taskId: string;
      /**
       * /keyword/info/talent?page=1&pageSize=10&platform=weibo&taskId=1397839301533892608
       */
      eg?: string;
    };
    Res: {
      "返回数据格式与 商品详情-关联达人-达人列表一致": string;
    };
  };

  /**
   * 接口名：报告详情-作品列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=265&itf=1570
   */
  "GET/keyword/info/work": {
    Req: {
      page: string;
      pageSize: string;
      platform: string;
      taskId: string;
      /**
       * /keyword/info/work?page=1&pageSize=10&platform=weibo&taskId=1397839301533892608
       */
      eg?: string;
    };
    Res: {
      "参数格式 - 作品列表通用格式": string;
    };
  };

  /**
   * 接口名：报告详情-趋势信息
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=265&itf=1584
   */
  "GET/keyword/info/trend": {
    Req: {
      taskId: string;
      /**
       * /keyword/info/trend?taskId=1398125984871481344
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 平台列表信息
         */
        platformData: {
          platform: string;
          accountNum: number | string;
          worksNum: number | string;
          interactive: string;
        }[];
        /**
         * 平台列表柱状图信息
         */
        platformBarChartData: {
          platform: string;
          accountNumRate: string;
          worksNumRate: string;
          interactiveRate: string;
        }[];
        /**
         * 平台趋势信息
         */
        platformTrendData: {
          platform: string;
          interactiveData: string[];
          accountNumData: string[];
          worksNumData: string[];
          dateData: string[];
        }[];
        talentCategory: {
          社会: {
            countRate: number;
            InterRate: number;
          };
          娱乐: {
            countRate: number;
            InterRate: number;
          };
          美食: {
            countRate: number;
            InterRate: number;
          };
          财经: {
            countRate: number;
            InterRate: number;
          };
          情感: {
            countRate: number;
            InterRate: number;
          };
        };
        talentMagnitude: {};
        worksCategory: {};
        worksMagnitude: {};
        workCommentKeyword: string;
        workContentKeyword: string;
      };
      e: null;
    };
  };

  /**
   * 接口名：达人报告导出
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=265&itf=1592
   */
  "GET/keyword/import/talent": {
    Req: {
      taskId: string;
      /**
       * /keyword/import/talent?taskId=1399559292889202688
       */
      eg?: string;
    };
    Res: {};
  };

  /**
   * 接口名：达人趋势导出
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=265&itf=3440
   */
  "GET/keyword/import/trend": {
    Req: {
      taskId: string;
      /**
       * /keyword/import/trend?taskId=1399559292889202688
       */
      eg?: string;
    };
    Res: {};
  };

  /**
   * 接口名：作品报告导出
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=265&itf=1593
   */
  "GET/keyword/import/work": {
    Req: {
      taskId: string;
      /**
       * /keyword/import/work?taskId=1399659776094371840
       */
      eg?: string;
    };
    Res: {};
  };

  /**
   * 接口名：报告详情-趋势信息(区分平台)
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=265&itf=2350
   */
  "GET/keyword/info/trend-platform": {
    Req: {
      /**
       * 平台信息
       */
      platform: string;
    };
    Res: {};
  };

  /**
   * 接口名：词频分析导出
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=265&itf=3504
   */
  "GET/keyword/import/word": {
    Req: {
      taskId: string;
    };
    Res: {};
  };

  /**
   * 接口名：过滤关键词推荐列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=265&itf=3632
   */
  "GET/keyword/index/filterKeyword": {
    Req: {
      /**
       * 类型： 1 账号昵称； 2 作品标题；3 作品正文；4 评论；
       *
       * 多个逗号分隔
       * 无则返回全部(默认)
       */
      type?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        nickName: string[];
        title: string[];
        content: string[];
        comment: string[];
      };
      e: null;
    };
  };

  /**
   * 接口名：报告详情-关联品牌
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=265&itf=3986
   */
  "GET/keyword/info/brand": {
    Req: {
      /**
       * 平台
       */
      platform: string;
      /**
       * 任务id
       */
      taskId: string;
      /**
       * score
       * accountNum
       * worksNum
       * interactive
       * promotionWorkNum
       */
      orderName?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        logo: string;
        brandId: number;
        brandName: string;
        brandEnName: string;
        /**
         * 达人数
         */
        accountNum: number;
        /**
         * 作品数
         */
        worksNum: number;
        /**
         * 报备作品数
         */
        promotionWorksNum: number;
        /**
         * 互动数
         */
        interactive: number;
        /**
         * 关联作品keys
         */
        workKeys: string[];
        /**
         * 关联达人keys
         */
        accountKeys: string[];
        /**
         * 指数
         */
        score: string;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：添加直播监控
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=307&itf=1856
   */
  "POST/live/index/add": {
    Req: {
      /**
       * 达人url
       */
      url: string;
      /**
       * 达人昵称
       */
      talentNickname: string;
      /**
       * 直播开始时间
       */
      liveTime: string;
      /**
       * url:https://v.douyin.com/eswuPy1/
       * talentNickname:红星新闻
       * liveTime:2021-07-15 15:34
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: null;
      e: null;
    };
  };

  /**
   * 接口名：更新直播监控的时间
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=307&itf=1858
   */
  "POST/live/index/update": {
    Req: {
      /**
       * taskId
       */
      taskId: string;
      liveTime: string;
      /**
       * taskId:1415568519986282496
       * liveTime:2021-07-15 16:00
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: null;
      e: null;
    };
  };

  /**
   * 接口名：直播监控列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=307&itf=1857
   */
  "GET/live/index/list": {
    Req: {
      /**
       * 达人昵称
       */
      talentNickname?: string;
      /**
       * 状态 1 暂未发文 2 直播中 3 直播结束 4 未监测到目标对象
       */
      status?: string;
      /**
       * 任务id
       */
      taskId?: string;
      /**
       * /live/index/list
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 达人key
         */
        key: string;
        talentNickname: string;
        /**
         * 分类信息
         */
        category: unknown[];
        /**
         * 达人url
         */
        talentUrl: string;
        /**
         * 性别
         */
        talentGender: string;
        /**
         * sourceId
         */
        talentSourceId: string;
        /**
         * talentId
         */
        talentId: number;
        /**
         * 头像
         */
        talentAvatar: string;
        /**
         * 粉丝数
         */
        fans: string;
        /**
         * 平台
         */
        platform: string;
        /**
         * 达人类型
         */
        authType: number;
        talentAuthentication: string;
        id: number;
        /**
         * 达人昵称
         */
        talentNickName: string;
        /**
         * 直播时间
         */
        liveTime: string;
        /**
         * 状态
         */
        status: number;
        /**
         * 任务id
         */
        taskId: string;
        updateTime: string;
        /**
         * 达人主页信息
         */
        url: string;
        /**
         * 直播间id
         */
        liveId: null;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：基础信息
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=307&itf=1859
   */
  "GET/live/info/basic": {
    Req: {
      /**
       * 直播间id
       */
      liveId: string;
      /**
       * /live/info/basic?liveId=134
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: number;
        /**
         * 平台
         */
        platform: string;
        /**
         * 直播间id
         */
        roomId: string;
        /**
         * 达人名称
         */
        talentNickname: string;
        /**
         * 粉丝量
         */
        fansNum: number;
        /**
         * 粉丝团名称
         */
        fansClubName: number;
        /**
         * 粉丝转化率
         */
        fansCvr: number;
        /**
         * 直播间名称
         */
        roomTitle: string;
        /**
         * 头像标识
         */
        cover: string;
        /**
         * 音浪值
         */
        wave: number;
        /**
         * 实时观看人数
         */
        visitor: number;
        /**
         * 总观看人数
         */
        totalVisitor: number;
        /**
         * 平均观看时长
         */
        avgViewTime: number;
        /**
         * 打赏数量
         */
        reward: null;
        /**
         * 点赞数
         */
        like: number;
        /**
         * 本场预估销售 量
         */
        sales: number;
        /**
         * 本场预估销售 额
         */
        salesVolume: number;
        /**
         * 客单价
         */
        arpa: number;
        /**
         * 销售转化率
         */
        saleCvr: number;
        /**
         * 直播开始时间
         */
        startTime: string;
        /**
         * 直播结束时间
         */
        endTime: string;
        /**
         * 评论词云
         */
        keywords: {
          双肩包: number;
          左上角: number;
          掉色: number;
          浪琴: number;
          声音: number;
          喜欢: number;
          拍到: number;
          直播间: number;
          邮差: number;
          口红: number;
          衣服: number;
          香奈儿: number;
          红色: number;
          好看: number;
          安安: number;
          价格: number;
          托特: number;
          好好看: number;
          方糖: number;
          子安: number;
          个性: number;
          皮带: number;
          鞋子: number;
          戒指: number;
          珐琅: number;
          颜色: number;
          进不去: number;
          医生: number;
          bv: number;
          马仕满: number;
          牙膏: number;
          气球: number;
          爱马仕: number;
          衬衣: number;
          燕窝: number;
          钱包: number;
          介绍: number;
          面膜: number;
          衬衫: number;
          成色: number;
          手表: number;
          子母: number;
          子安戴: number;
          编织: number;
          成功: number;
          没上: number;
          onthego: number;
          经典: number;
          nano: number;
          lv: number;
          牌子: number;
          价比高: number;
          上衣: number;
          化妆包: number;
          mcm: number;
          fendi: number;
          男士: number;
          视频: number;
          腰包: number;
          白色: number;
          款式: number;
          客服: number;
          秒杀: number;
          推荐: number;
          腰带: number;
          包包: number;
          管理员: number;
          眼镜: number;
          项链: number;
          麻将: number;
          gucci: number;
          宝格丽: number;
          马蒙: number;
          中奖: number;
          有没有: number;
          抢到: number;
          请问: number;
          卡地亚: number;
          买到: number;
          不到: number;
          包带: number;
          水桶: number;
          黑色: number;
          化妆品: number;
          耳环: number;
          材质: number;
          子安姐: number;
          锁骨: number;
          不行: number;
          漂亮: number;
          想要: number;
          劳力士: number;
          上点: number;
          celine: number;
          面霜: number;
          沐浴: number;
          洗漱包: number;
          脖子: number;
          裤子: number;
          单肩: number;
        };
        /**
         * 观众来源分布
         */
        userComposition: {
          other: number;
          city: number;
          video_detail: number;
          my_follow: number;
        };
        /**
         * 观众年龄分布
         */
        visitorAgeCount: {
          "36-40": number;
          "6-17": number;
          "18-24": number;
          "31-35": number;
          "25-30": number;
          "41+": number;
        };
        /**
         * 观众性别分布
         */
        visitorGenderCount: {
          女: number;
          男: number;
        };
        /**
         * 观众地域分布
         */
        visitorAreaCount: {
          山东: number;
          福建: number;
          河北: number;
          河南: number;
          重庆: number;
          湖北: number;
          湖南: number;
          江西: number;
          海南: number;
          黑龙江: number;
          天津: number;
          陕西: number;
          贵州: number;
          新疆: number;
          澳门: number;
          江苏: number;
          安徽: number;
          西藏: number;
          上海: number;
          吉林: number;
          山西: number;
          甘肃: number;
          宁夏: number;
          香港: number;
          四川: number;
          浙江: number;
          广西: number;
          云南: number;
          内蒙古: number;
          辽宁: number;
          广东: number;
          青海: number;
          北京: number;
        };
        /**
         * 更新时间
         */
        update: string;
      };
      e: null;
    };
  };

  /**
   * 接口名：达人基础信息
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=307&itf=1889
   */
  "GET/live/info/talentInfo": {
    Req: {
      /**
       * 达人key
       */
      key: string;
      /**
       * taskId
       */
      taskId: string;
      /**
       * /live/info/talentInfo?key=f3e1_douyin_63685358902&taskId=1415491746892218368
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 达人id
         */
        talentId: number;
        /**
         * 达人sourceId
         */
        talentSourceId: string;
        /**
         * 平台
         */
        platform: string;
        talentNickname: string;
        talentMcn: unknown[];
        talentAvatar: string;
        talentAuthentication: string;
        talentProvince: string;
        talentCity: string;
        authType: number;
        key: string;
        talentSignature: string;
        talentGender: string;
        fans: string;
        collect: number;
        activeFans: number;
        focusNum: number;
        read: number;
        like: string;
        comment: number;
        transpond: number;
        interactive: string;
        works: number;
        updateTime: string;
        insertTime: string;
        spider: string;
        keywords: unknown[];
        category: unknown[];
        score: string;
        talentLevel: number;
        isCollect: number;
        showcase: null;
        fansMonth: null;
        interactiveMonth: null;
        basicInfo: string;
        rank: string;
        statistics: {
          fans: string;
          works: number;
          like: string;
          interactive: string;
          preWorks: number;
          likeDivFans: string;
          fansDivWorks: string;
        };
        talentUrl: string;
        groupOfTalent: unknown[];
        monitorCount: number;
        /**
         * 状态信息
         */
        status: string;
      };
      e: null;
    };
  };

  /**
   * 接口名：商品列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=307&itf=1860
   */
  "GET/live/info/product": {
    Req: {
      liveId: string;
      /**
       * /live/info/product?liveId=134
       */
      eg?: string;
      /**
       * 排序字段
       */
      orderName?: string;
      pageSize: string;
      page: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 名称
         */
        name: number;
        /**
         * logo
         */
        productLogo: string;
        /**
         * 直播价格
         */
        livePrice: number;
        /**
         * 商品原价
         */
        originalPrice: number;
        /**
         * 预估销量
         */
        sales: number;
        /**
         * 预估销售额
         */
        saleVolume: null;
        /**
         * 第一类名称
         */
        firstCatName: null;
        /**
         * 第二类别名称
         */
        secondCatName: null;
        /**
         * 第三类别名称
         */
        thirdCatName: null;
        /**
         * 品牌id
         */
        brandId: null;
        /**
         * 品牌名称
         */
        brandName: null;
      };
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：商品/品牌 类目分布
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=307&itf=1864
   */
  "GET/live/info/category": {
    Req: {
      liveId: string;
      /**
       * /live/info/category?liveId=166
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        goodsCatDist: {
          食品保健: number;
          家用电器: number;
          母婴玩具: number;
          家居生活: number;
          其他分类: number;
          其他: number;
        };
        brandCatDist: {
          食品保健: number;
          家用电器: number;
          家居生活: number;
          鞋类箱包: number;
          母婴玩具: number;
          其他: number;
        };
      };
      e: null;
    };
  };

  /**
   * 接口名：评论列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=307&itf=1861
   */
  "GET/live/info/comment": {
    Req: {
      liveId: string;
      /**
       * /live/info/comment?liveId=134
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 品论人昵称
         */
        nick: string;
        /**
         * 品论内容
         */
        content: string;
        /**
         * 达人头像
         */
        avatar: string;
        /**
         * 评论时间
         */
        commentTime: string;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：打赏榜
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=307&itf=1862
   */
  "GET/live/info/reward": {
    Req: {
      liveId: string;
      /**
       * /live/info/reward?liveId=134
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 打赏人昵称
         */
        nick: string;
        /**
         * 音浪值
         */
        score: number;
        /**
         * 达人头像
         */
        avatar: string;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：趋势数据
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=307&itf=1863
   */
  "GET/live/info/trend": {
    Req: {
      liveId: string;
      /**
       * /live/info/trend?liveId=134
       */
      eg?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 实时观看人数需序列
         */
        visitorList: number[];
        /**
         * 总观看人数序列
         */
        totalVisitorList: number[];
        /**
         * 销售量序列
         */
        salesList: (
          | {
              [k: string]: unknown;
            }
          | number
        )[];
        /**
         * 预估销售额序列
         */
        salesVolumeList: (
          | {
              [k: string]: unknown;
            }
          | number
        )[];
        /**
         * 互动数序列
         */
        interactiveList: number[];
        /**
         * 时间序列
         */
        dateList: string[];
      };
      e: null;
    };
  };

  /**
   * 接口名：token获取
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=296&itf=1743
   */
  "POST/account/open/checkApi": {
    Req: {
      appId: string;
      appSecret: string;
    };
    Res: {
      /**
       * eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJob3RtYWlfb3BlbiIsImF1ZCI6Ilx1OWFkOFx1NmQ2YSIsImp0aSI6IjA5QlAzWVlQVUQiLCJpYXQiOjE2MjM3NDM1MjcsIm5iZiI6MTYyMzc0MzUyNywiZXhwIjoxNjI0MzQ4MzI3LCJhcHBfc2VjcmV0IjoiMVJCOU1JN01LNElYTTg5WE1OVUZBUUswTjJWQzNUUjIifQ.vQMNxrXajMPi8ifez-ICI63pWNtwqk50xxWuUjBHFEs
       */
      token字段: string;
    };
  };

  /**
   * 接口名：达人列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=363&itf=2192
   */
  "POST/brand/tenant/talent": {
    Req: {
      /**
       * /brand/talent?platform=weibo&brandId=10054&startDate=2021-01-27&endDate=2021-02-02&orderName=score&pageSize=10&page=1
       */
      tenant: string;
      /**
       * 分人分类id
       */
      accountCat?: string;
      /**
       * 品牌id
       */
      brandId: string;
      /**
       * 2020-06-29
       */
      startDate: string;
      /**
       * 2020-07-05
       */
      endDate: string;
      page?: string;
      pageSize?: string;
      /**
       * 排序名称 评分:score, 品宣作品数:materialTotal, 品宣作品互动数:interactive, 粉丝:'fans', 带货作品数:'materialWithProduct', 关联商品数:productTotal,
       */
      orderName?: string;
      platform: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        talentId: number;
        /**
         * 粉丝数
         */
        fans: string;
        works: number;
        /**
         * 推广作品数
         */
        materialTotal: number;
        /**
         * 关联商品数
         */
        productTotal: number;
        /**
         * 推广作品互动数
         */
        interactive: string | number;
        /**
         * 带货作品数
         */
        materialWithProduct: number;
        likes: string | number;
        /**
         * 热卖指数
         */
        score: string;
        /**
         * 标题
         */
        nickName: string;
        /**
         * 标签分类
         */
        categoryList: string[];
        /**
         * 图片
         */
        avatar: string;
        platform: string;
        like: string | number;
        /**
         * 签名
         */
        signature: string;
        authentication: string;
        talentSourceId: string;
        authType: number;
        /**
         * 达人性别 1 男 2 女
         */
        talentGender: string;
        /**
         * 省
         */
        province: string;
        /**
         * 市
         */
        city: string;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：内投达人-分类
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=363&itf=2188
   */
  "GET/brand/tenant/talentCategory": {
    Req: {
      /**
       * 平台
       */
      platform: string;
      /**
       * 品牌ID
       */
      brandId: string;
      startDate: string;
      endDate: string;
      tenant: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: string | number;
        /**
         * 名称
         */
        label: string;
        /**
         * 数量
         */
        value: number;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：数据分析
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=363&itf=2189
   */
  "GET/brand/tenant/stats": {
    Req: {
      platform: string;
      brandId: string;
      startDate: string;
      endDate: string;
      tenant: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        internalData: {
          /**
           * 达人数
           */
          accountNum: number;
          /**
           * 作品数
           */
          worksNum: number;
          /**
           * 互动数
           */
          interactive: number;
          /**
           * 评论词云
           */
          ckeyword: {
            梦想: number;
            xpx: number;
            挥洒: number;
            舞台: number;
            惧怕: number;
            唱功: number;
            高音: number;
            完美: number;
            王俊凯: number;
            帅哥: number;
            回眸: number;
            热泪: number;
            干什么: number;
            懂得: number;
            跳舞: number;
            边界: number;
            情商: number;
            微笑: number;
            汗水: number;
            实力: number;
            演唱会: number;
            有趣: number;
            后退: number;
            日出: number;
            粉丝: number;
            努力: number;
            明媚: number;
            天坑: number;
            联合国环境署: number;
            好听: number;
            面对: number;
            温柔: number;
            螃蟹: number;
            努力奋斗: number;
            拥有: number;
            味道: number;
            公益: number;
            live: number;
            wu: number;
            拥抱: number;
            演技: number;
            能量: number;
            精彩: number;
            守卫: number;
            弟弟: number;
            call: number;
            后背: number;
            代言: number;
            优越: number;
            wjk: number;
          };
          /**
           * 作品词云
           */
          wkeyword: {
            梦想: number;
            游走: number;
            付出: number;
            王俊凯: number;
            时光: number;
          };
          /**
           * 达人分类
           */
          talentCategory: unknown[];
          /**
           * 达人等级
           */
          talentMagnitude: {
            全部: {
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            娱乐: {
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
          };
        };
        externalData: {
          accountNum: number;
          worksNum: number;
          interactive: number;
          ckeyword: {
            dior: number;
            可怜: number;
            女生: number;
            买买: number;
            姐姐: number;
            喜欢: number;
            大牌: number;
            哆啦a梦: number;
            太帅: number;
            种草: number;
            加油: number;
            袁冰妍: number;
            身材: number;
            口红: number;
            衣服: number;
            馋嘴: number;
            惊喜: number;
            awsl: number;
            安排: number;
            好帅: number;
            想去: number;
            好看: number;
            可爱: number;
            宝贝: number;
            博主: number;
            满满: number;
            好好看: number;
            风格: number;
            最爱: number;
            厉害: number;
            救命: number;
            害羞: number;
            很棒: number;
            颜色: number;
            亲亲: number;
            期待: number;
            味道: number;
            心动: number;
            谢谢: number;
            喜欢你: number;
            适合: number;
            能量: number;
            微博: number;
            嘻嘻: number;
            老婆: number;
            开学: number;
            分享: number;
            call: number;
            牛奶: number;
            中国: number;
            老公: number;
            希望: number;
            感觉: number;
            doge: number;
            鲜花: number;
            完美: number;
            牌子: number;
            王俊凯: number;
            帅哥: number;
            入手: number;
            眼睛: number;
            苦涩: number;
            yyds: number;
            气质: number;
            乐章: number;
            男士: number;
            看着: number;
            小心: number;
            品牌: number;
            优秀: number;
            推荐: number;
            帅气: number;
            不错: number;
            香水: number;
            迪奥: number;
            更多: number;
            我喜欢: number;
            太美: number;
            一点: number;
            试试: number;
            实力: number;
            旷野: number;
            支持: number;
            悲伤: number;
            有没有: number;
            温柔: number;
            开心: number;
            鼓掌: number;
            搭配: number;
            值得: number;
            高级: number;
            明星: number;
            关注: number;
            漂亮: number;
            想要: number;
            太棒: number;
            时尚: number;
            憧憬: number;
            感谢: number;
            转发: number;
          };
          wkeyword: {
            沉浸: number;
            公司: number;
            dior: number;
            洗面奶: number;
            敬请: number;
            大片: number;
            针管: number;
            喜欢: number;
            袁冰妍: number;
            口红: number;
            气垫: number;
            女性: number;
            红色: number;
            杀青: number;
            打造: number;
            tfboys: number;
            好看: number;
            可爱: number;
            过期: number;
            价格: number;
            棕色: number;
            大使: number;
            赵丽颖: number;
            滋润: number;
            chomel: number;
            元素: number;
            西装: number;
            直播: number;
            奢侈品: number;
            清新: number;
            灵感: number;
            期待: number;
            海盗: number;
            采用: number;
            网页: number;
            香精: number;
            适合: number;
            丝绒: number;
            女孩: number;
            李飞: number;
            合作: number;
            平遥: number;
            成衣: number;
            精华: number;
            cd: number;
            唇膏: number;
            呈现: number;
            ootd: number;
            面料: number;
            钱包: number;
            微博: number;
            couture: number;
            评论: number;
            diptyque: number;
            男人: number;
            分享: number;
            点击: number;
            细节: number;
            国际化: number;
            中国: number;
            造型: number;
            经典: number;
            感觉: number;
            王俊凯: number;
            全球: number;
            ysl: number;
            感受: number;
            乐章: number;
            logo: number;
            男士: number;
            视频: number;
            白色: number;
            款式: number;
            品牌: number;
            推荐: number;
            优雅: number;
            香水: number;
            pidai: number;
            迪奥: number;
            包包: number;
            chanel: number;
            设计: number;
            马鞍: number;
            weixin: number;
            项链: number;
            gucci: number;
            旷野: number;
            珍珠: number;
            活动: number;
            散发: number;
            搭配: number;
            黑色: number;
            设计师: number;
            粉底液: number;
            高级: number;
            小众: number;
            代言人: number;
            艺术: number;
            时尚: number;
            锐意: number;
          };
          talentCategory: {
            娱乐: {
              countRate: number;
              InterRate: number;
            };
            时尚: {
              countRate: number;
              InterRate: number;
            };
            美妆: {
              countRate: number;
              InterRate: number;
            };
            美食: {
              countRate: number;
              InterRate: number;
            };
            社会: {
              countRate: number;
              InterRate: number;
            };
          };
          talentMagnitude: {
            全部: {
              中腰部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              明星: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              Koc: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              头部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            娱乐: {
              中腰部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              明星: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              Koc: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              头部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            时尚: {
              中腰部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              Koc: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              头部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            美妆: {
              中腰部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              Koc: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              头部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            美食: {
              中腰部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              Koc: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              头部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            社会: {
              中腰部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              Koc: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            体育: {
              中腰部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            情感: {
              中腰部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            文化: {
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              Koc: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            搞笑: {
              中腰部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            财经: {
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            艺术: {
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            旅游: {
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              Koc: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            汽车: {
              中腰部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            教育: {
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            萌宠: {
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            健康: {
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            家居: {
              中腰部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
            其他: {
              中腰部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              尾部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              明星: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              Koc: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
              头部: {
                c: number;
                i: number;
                countRate: number;
                InterRate: number;
              };
            };
          };
        };
      };
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：内投作品-分类
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=363&itf=2193
   */
  "GET/brand/tenant/workCategory": {
    Req: {
      platform: string;
      brandId: string;
      startDate: string;
      endDate: string;
      tenant: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: string | number;
        /**
         * 名称
         */
        label: string;
        /**
         * 数量
         */
        value: number;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：品类列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=561&itf=3808
   */
  "GET/category/query/list": {
    Req: {
      /**
       * 品类名称 或别名
       */
      keyword?: string;
      /**
       * 媒体平台
       * _all 全部(默认)
       * xhs....
       */
      platform?: string;
      /**
       * 排序：
       * score 指数
       * accountNum 关联达人数
       * worksNum 关联作品数
       * interactive 互动数
       * brandNum 品牌数
       * productNum 商品数
       */
      orderName?: string;
      /**
       * 品类id
       */
      categoryCat?: string;
      /**
       * 开始日期 格式：2022-01-01
       */
      startDate?: string;
      /**
       * 结束日期 格式：2022-01-01
       */
      endDate?: string;
      page?: string;
      pageSize?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        id: number | {};
        /**
         * 平台，中文
         */
        platform: string | {};
        /**
         * 品类id
         */
        categoryId: number;
        /**
         * 关联达人数
         */
        accountNum: string | {};
        /**
         * 关联作品数
         */
        worksNum: string | {};
        /**
         * 关联品牌数
         */
        brandNum: null;
        /**
         * 关联商品数
         */
        productNum: number | {};
        /**
         * 互动数
         */
        interactive: string | {};
        rank: number | {};
        /**
         * 品类指数
         */
        score: string;
        dateFrom: null;
        dateTo: null;
        /**
         * 品类名称
         */
        name: string;
        rowKey: null;
        enName: string;
        averageInteractive: null;
        fans: null;
        comment: number | {};
        barrage: number | {};
        coin: number | {};
        keyword: null;
        /**
         * 投放体量
         */
        price: string | {};
        likes: number | {};
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：品类详情
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=561&itf=3814
   */
  "GET/category/query/detail": {
    Req: {
      /**
       * 品类id
       */
      categoryCat?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 关联达人数
         */
        accountNum: null;
        /**
         * 关联作品数
         */
        worksNum: null;
        /**
         * 互动数
         */
        interactive: null;
        /**
         * 关联品牌数
         */
        brandNum: null;
        /**
         * 关联商品数
         */
        productNum: null;
        /**
         * 报备作品数
         */
        promotionWorksNum: null;
        /**
         * 投放体量
         */
        promotionPrice: null;
        /**
         * 点赞数
         */
        likes: null;
        /**
         * 评论数
         */
        comment: null;
        /**
         * 热麦指数
         */
        score: string;
        /**
         * 品类id
         */
        id: number;
        /**
         * 品类名称
         */
        name: string;
        /**
         * 品类排名
         */
        rank: null;
        /**
         * 更新时间
         */
        updateTime: string;
        /**
         * 父级品类名称
         */
        parentName: string;
        /**
         * 排序信息
         */
        rankInfo: string;
        /**
         * 品类主分类
         *
         */
        productMainCatName: string;
      };
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：品类详情-品类总览-平台概览
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=561&itf=3810
   */
  "GET/category/query/platformSummary": {
    Req: {
      categoryCat: string;
      platform?: string;
      startDate: string;
      endDate: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        id: number;
        /**
         * 平台 中文
         */
        platform: string;
        categoryId: number;
        /**
         * 关联达人数
         */
        accountNum: string;
        /**
         * 关联作品数
         */
        worksNum: string;
        /**
         * 关联品牌数
         */
        brandNum: null;
        /**
         * 关联商品数
         */
        productNum: number;
        /**
         * 互动数
         */
        interactive: string;
        /**
         * 排序
         */
        rank: number;
        score: string;
        dateFrom: null;
        dateTo: null;
        /**
         * 名称
         */
        name: null;
        rowKey: null;
        enName: null;
        averageInteractive: number;
        fans: null;
        comment: number;
        barrage: number;
        coin: number;
        keyword: null;
        price: string;
        likes: number;
        /**
         * 关联达人当前平台占比
         */
        talentRate: number;
        /**
         * 作品占比
         */
        workRate: number;
      }[];
      e: {
        /**
         * 总关联达人数
         */
        totalAccountNum: string;
        /**
         * 总关联作品数
         */
        totalWorksNum: string;
        /**
         * 总互动数
         */
        totalInteractive: string;
      };
    };
  };

  /**
   * 接口名：品类详情-品类总览-平台趋势
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=561&itf=3811
   */
  "GET/category/query/platformTrend": {
    Req: {
      /**
       * 品类id
       */
      categoryCat: number;
      /**
       * 媒体平台
       */
      platform?: string;
      /**
       * 开始日期 格式：2022-01-01
       */
      startDate: string;
      /**
       * 结束日期 格式：2022-01-01
       */
      endDate: string;
    };
    Res: {
      code: number;
      message: string;
      data: {
        /**
         * 平台名称
         */
        platform: string;
        /**
         * 指数
         */
        scoreData: string[];
        /**
         * 互动数
         */
        interactiveData: string[];
        /**
         * 关联达人数
         */
        accountNumData: string[];
        /**
         * 关联作品数
         */
        worksNumData: string[];
        /**
         * 日期
         */
        dateData: string[];
        /**
         * 关联商品数
         */
        productNumData: string[];
      }[];
    };
  };

  /**
   * 接口名：品类详情-品类总览-top
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=561&itf=3822
   */
  "GET/category/query/top": {
    Req: {
      platform?: string;
      /**
       * 品类id
       */
      categoryId: string;
      startDate: string;
      endDate: string;
      page?: string;
      pageSize?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 推广达人数
         */
        accountNum: number;
        /**
         * 推广作品数
         */
        worksNum: string;
        /**
         * 总互动数
         */
        interactive: string;
        /**
         * 关联商品数
         */
        productNum: number;
        /**
         * 商品推广作品互动数
         */
        productInteractive: number;
        /**
         * 话题总数
         */
        topicNum: number;
        /**
         * 话题总互动数
         */
        topicInteractive: number;
        /**
         * Top作品分类值
         */
        topWorkCategory: {
          value: string;
          label: string;
        };
        /**
         * Top达人量级值
         */
        topKolLevel: {
          value: string;
          label: string;
        };
        /**
         * Top粉丝性别值
         */
        topFansGender: {
          value: string;
          label: string;
        };
        /**
         * Top粉丝年龄值
         */
        topFansAge: {
          value: string;
          label: string;
        };
        /**
         * Top商品分类值
         */
        topProductCategory: null;
        /**
         * Top作品列表
         */
        worksList: {
          videoId: number;
          videoSourceId: string;
          platform: string;
          videoTitle: string;
          videoContent: string;
          videoCover: string;
          videoUrl: string;
          like: string;
          comment: string;
          collect: string;
          transpond: string;
          barrage: string;
          interactive: string;
          read: string;
          type: string | number;
          createTime: string;
          insertTime: string;
          updateTime: string;
          spider: string;
          keywords: string[];
          category: string[];
          score: string;
          topic: string[];
          keys: string;
          brandId: number;
          brandIds: number[];
          productTotal: number;
          isReport: boolean;
          cooperate: string;
          cooperateBrandId: string;
          isPromotion: boolean;
          talentInfo: {
            talentId: string;
            platform: string;
            talentSourceId: string;
            talentKey: string;
            talentNickname: string;
            talentNickName: string;
            talentAvatar: string;
            fans: number;
            talentAuthentication: string;
            authType: number;
            talentGender: number;
            talentCity: string;
            talentCategory: string;
            talentSignature: string;
            labelDatas: unknown[];
            talentSourceUrl: null;
          };
          workLabelDatas: unknown[];
          isCollect: number;
          monitorInfo: null;
        }[];
        /**
         * Top达人列表
         */
        accountList: unknown[];
        /**
         * Top商品列表
         */
        productList: {
          id: number;
          brandId: number;
          brandName: string;
          brandLogo: string;
          name: string;
          enName: string;
          tag: string[];
          url: string;
          productLogo: string;
          descibe: string;
          promotionTime: string;
          score: string;
          accountNum: number;
          worksNum: number | string;
          interactive: string;
          firstCatName: string;
          secondCatName: string;
          thirdCatName: string;
        }[];
        /**
         * Top话题列表
         */
        topicList: unknown[];
        /**
         * Top品牌列表
         */
        brandList: unknown[];
        /**
         * 品牌数
         */
        brandNum: string;
        /**
         * 品牌互动数
         */
        brandInteractive: string;
      };
      e: null;
    };
  };

  /**
   * 接口名：品类详情-关联达人-数据分析
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=561&itf=3833
   */
  "GET/category/talent/analysis": {
    Req: {
      /**
       * 品类id
       */
      categoryId: string;
      startDate: string;
      platform: string;
      endDate: string;
      /**
       * _all 全部 ，common 自然流量 ,promotion 商业推广
       */
      scope?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 达人总数
         */
        talentTotalData: string[];
        /**
         * 达人增量
         */
        talentIncrementalData: string[];
        /**
         * 日期
         */
        dateData: string[];
        /**
         * 分类map
         */
        categoryData: {
          美妆: number;
          时尚: number;
          美食: number;
          娱乐: number;
          情感: number;
          其他: number;
        };
        /**
         * 性别map
         */
        genderData: {
          女: number;
          男: number;
        };
        /**
         * 年龄map
         */
        ageData: {
          "18-24": number;
          "25-30": number;
          "25-34": number;
          "31-35": number;
          "31-40": number;
          "35-44": number;
          "36-40": number;
          "41+": number;
          "45+": number;
          "6-17": number;
        };
        geoData: {};
        kolLevelCountMap: {};
        /**
         * 城市线级
         */
        cityLevelMap: {};
        /**
         * 城市
         */
        cityMap: {};
        /**
         * 省份
         */
        provinceMap: {};
        fansConstellationMap: {
          处女座: number;
          天秤座: number;
          水瓶座: number;
          射手座: number;
          白羊座: number;
          双子座: number;
          巨蟹座: number;
          摩羯座: number;
          双鱼座: number;
          金牛座: number;
          天蝎座: number;
          狮子座: number;
        };
        /**
         * 达人类型分布
         */
        talentCategory: {};
        /**
         * 达人量级分布
         */
        talentMagnitude: {};
      };
      e: null;
    };
  };

  /**
   * 接口名：品类详情-关联达人-达人分类
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=561&itf=3836
   */
  "GET/category/talent/cat": {
    Req: {
      /**
       * 品类id
       */
      categoryId: string;
      startDate: string;
      platform: string;
      endDate: string;
      /**
       * _all 全部 ，common 自然流量 ,promotion 商业推广
       */
      scope?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: number;
        /**
         * 名称
         */
        label: string;
        /**
         * 数量
         */
        value: number;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：品类详情-关联达人-达人列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=561&itf=3838
   */
  "GET/category/talent/list": {
    Req: {
      /**
       * 品类id
       */
      categoryId: string;
      startDate: string;
      platform: string;
      endDate: string;
      /**
       * _all 全部 ，common 自然流量 ,promotion 商业推广
       */
      scope?: string;
      /**
       * fans
       * works
       * interactive
       * score
       */
      orderName?: string;
      /**
       * 达人分类id
       */
      accountCat?: number;
    };
    Res: {
      f: number;
      m: string;
      d: {
        talentId: number;
        talentKey: string;
        fans: string;
        works: number;
        /**
         * 商品数量
         */
        product: number;
        interactive: number;
        /**
         * 带货作品数
         */
        worksWithProduct: number;
        likes: number;
        score: string;
        nickName: string;
        category: string[];
        avatar: string;
        platform: string;
        signature: string;
        authentication: string;
        talentSourceId: string;
        authType: number;
        talentGender: number;
        province: string;
        city: string;
        isPromotion: boolean;
        labelDatas: {
          id: number;
          parentId: number;
          name: string;
          level: number;
          keywords: null;
          display: number;
          categoryId: {} | number;
          status: number;
          rank: null;
          subLabels: {
            id: number;
            parentId: number;
            name: string;
            level: number;
            keywords: string[];
            display: number;
            categoryId: null;
            status: number;
            rank: number;
            subLabels: unknown[];
          }[];
        }[];
        talentSourceUrl: string;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：品类详情-关联作品-数据分析
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=561&itf=3834
   */
  "GET/category/work/analysis": {
    Req: {
      /**
       * 品类id
       */
      categoryId: string;
      startDate: string;
      platform: string;
      endDate: string;
      /**
       * _all 全部 ，common 自然流量 ,promotion 商业推广
       */
      scope?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 作品数量趋势-总量
         */
        workTotalData: string[];
        /**
         * 作品数量趋势-增量
         */
        workIncrementalData: string[];
        /**
         * 作品互动量趋势
         */
        interactiveData: string[];
        /**
         * 日期
         */
        dateData: string[];
        /**
         * 作品评论词云
         */
        workCommentKeyword: {
          模式: number;
          好可爱: number;
          状态: number;
          晚上好: number;
          姐姐: number;
          喜欢: number;
          种草: number;
          买了: number;
          安排: number;
          操作: number;
          不错呀: number;
          好看: number;
          可爱: number;
          购物车: number;
          宝贝: number;
          舒服: number;
          博主: number;
          价格: number;
          真的很: number;
          好好看: number;
          颜值: number;
          有用: number;
          功能: number;
          美容院: number;
          用起来: number;
          价位: number;
          实用: number;
          绝了: number;
          抗老: number;
          法令纹: number;
          冲冲: number;
          心动: number;
          跟着: number;
          谢谢: number;
          敏感肌: number;
          喜欢你: number;
          收藏: number;
          性价比: number;
          适合: number;
          效果: number;
          第一: number;
          绝绝子: number;
          到了: number;
          精华: number;
          了吧: number;
          面膜: number;
          用完: number;
          嘻嘻: number;
          分享: number;
          爱了: number;
          在家: number;
          希望: number;
          感觉: number;
          牌子: number;
          入手: number;
          护肤: number;
          按摩: number;
          太好: number;
          视频: number;
          看着: number;
          很贵: number;
          推荐: number;
          不错: number;
          美女: number;
          好好: number;
          一点: number;
          试试: number;
          凝胶: number;
          的样子: number;
          美容仪: number;
          仪器: number;
          皮肤: number;
          活动: number;
          有没有: number;
          不贵: number;
          都是: number;
          护肤品: number;
          请问: number;
          拥有: number;
          安利: number;
          快乐: number;
          想买: number;
          值得: number;
          宝藏: number;
          能用: number;
          高级: number;
          漂亮: number;
          姐妹: number;
          想要: number;
          太棒: number;
          美容: number;
          感谢: number;
          产品: number;
          雅萌: number;
          精致: number;
          好像: number;
          初普: number;
          很好: number;
          确实: number;
          熬夜: number;
        };
        /**
         * 作品内容词云
         */
        workContentKeyword: {
          模式: number;
          状态: number;
          水肿: number;
          智商税: number;
          喜欢: number;
          射频仪: number;
          选择: number;
          faq: number;
          解决: number;
          操作: number;
          出门: number;
          抗初老: number;
          舒服: number;
          amiro: number;
          功能: number;
          保养: number;
          美容院: number;
          抗老: number;
          法令纹: number;
          保湿: number;
          话题: number;
          萌萌哒: number;
          用它: number;
          性价比: number;
          适合: number;
          效果: number;
          霓姿: number;
          皮肤管理: number;
          精华: number;
          能量: number;
          做了: number;
          改善: number;
          我这种: number;
          面膜: number;
          用完: number;
          分享: number;
          眼霜: number;
          流光刀: number;
          补水: number;
          衰老: number;
          饱满: number;
          在家: number;
          感觉: number;
          提拉紧致: number;
          肌肤: number;
          护肤: number;
          入手: number;
          按摩: number;
          清洁: number;
          体验: number;
          感受: number;
          水光: number;
          ogp: number;
          视频: number;
          情况: number;
          脸部: number;
          品牌: number;
          紧致: number;
          技术: number;
          推荐: number;
          spa: number;
          不错: number;
          微电流: number;
          一点: number;
          时间: number;
          凝胶: number;
          美容仪: number;
          抗衰: number;
          变得: number;
          仪器: number;
          皮肤: number;
          细纹: number;
          黑眼圈: number;
          护肤品: number;
          都是: number;
          肉眼: number;
          神器: number;
          ems: number;
          搭配: number;
          嫩肤: number;
          胶原蛋白: number;
          面部: number;
          毛孔: number;
          测评: number;
          修复: number;
          射频美容仪: number;
          姐妹: number;
          导入: number;
          美容: number;
          红光: number;
          下颌: number;
          护理: number;
          感谢: number;
          newa: number;
          产品: number;
          吸收: number;
          提拉: number;
          雅萌: number;
          发现: number;
          熬夜: number;
        };
        /**
         * 作品类型分布
         */
        workCategory: {
          美妆: {
            countRate: number;
            InterRate: number;
          };
          健康: {
            countRate: number;
            InterRate: number;
          };
          数码: {
            countRate: number;
            InterRate: number;
          };
        };
        /**
         * 作品类型分布
         */
        workMagnitude: {
          全部: {
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            超头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            肩部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          美妆: {
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            超头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            肩部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          健康: {
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            超头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            肩部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
          数码: {
            尾部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            超头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            腰部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            Koc: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            肩部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
            头部: {
              c: number;
              i: number;
              countRate: number;
              InterRate: number;
            };
          };
        };
      };
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：品类详情-关联作品-作品列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=561&itf=3849
   */
  "GET/category/work/list": {
    Req: {
      startDate: string;
      endDate: string;
      platform: string;
      /**
       * 品类id
       */
      categoryId?: number;
      /**
       * _all 全部(默认) ，common 自然流量 ,promotion 商业推广
       */
      scope?: string;
      /**
       * 达人sourceid
       */
      talentSourceId?: string;
      /**
       * 作品分类
       */
      category?: number;
    };
    Res: {
      f: number;
      m: string;
      d: {
        monitorInfo: null;
        videoId: number;
        platform: string;
        videoTitle: string;
        videoKey: string;
        videoContent: string;
        videoCover: string;
        videoUrl: string;
        images: string[];
        likes: string;
        like: string;
        comment: string | number;
        read: number;
        collect: string | number;
        transpond: number | string;
        type: number;
        createTime: string;
        talentId: number;
        sourceId: string;
        videoSourceId: string;
        talentNickName: string;
        keywords: string[];
        talentAvatar: string;
        talentFans: string | number;
        score: string;
        productTotal: number;
        interactive: string;
        category: string[];
        isReport: boolean;
        cooperate: string;
        cooperateBrandId: string;
        isPromotion: boolean;
        workLabelDatas: unknown[];
        labelDatas: {
          id: number;
          parentId: number;
          name: string;
          level: number;
          keywords: null;
          display: number;
          categoryId: number | {};
          status: number;
          rank: null;
          subLabels: {
            id: number;
            parentId: number;
            name: string;
            level: number;
            keywords: string[];
            display: number;
            categoryId: null;
            status: number;
            rank: number;
            subLabels: unknown[];
          }[];
        }[];
        talentSourceUrl: string;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：品类详情-关联作品-作品分类
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=561&itf=3850
   */
  "GET/category/work/cat": {
    Req: {
      /**
       * 品类id
       */
      categoryId: string;
      startDate: string;
      platform: string;
      endDate: string;
      /**
       * _all 全部 ，common 自然流量 ,promotion 商业推广
       */
      scope?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * id
         */
        id: number;
        /**
         * 名称
         */
        label: string;
        /**
         * 数量
         */
        value: number;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：品类标签树
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=561&itf=3835
   */
  "GET/category/query/tree": {
    Req: {};
    Res: {
      f: number;
      m: string;
      d: {
        /**
         * 品类id
         */
        id: number;
        parentId: number;
        name: string;
        /**
         * 子级
         */
        children: {
          id: number;
          parentId: number;
          name: string;
          children: {
            id: number;
            parentId: number;
            name: string;
            children: null;
          }[];
        }[];
      }[];
      e: null;
    };
  };

  /**
   * 接口名：品类详情-关联商品-商品分类
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=561&itf=3977
   */
  "GET/category/product/cat": {
    Req: {
      platform?: string;
      categoryId?: string;
      startDate?: string;
      endDate?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        id: number;
        label: string;
        value: number;
      }[];
      e: null;
    };
  };

  /**
   * 接口名：品类详情-关联商品-商品列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=561&itf=3978
   */
  "GET/category/product/list": {
    Req: {
      platform?: string;
      /**
       * 分类id
       */
      productLevelCat?: string;
      startDate?: string;
      endDate?: string;
      /**
       * 排序：
       * score 指数
       * accountNum 关联达人数
       * worksNum 关联作品数
       * interactive 互动数
       * brandNum 品牌数
       * productNum 商品数
       */
      orderName?: string;
      /**
       * 商品名称 或别名
       */
      keyword?: string;
    };
    Res: {
      f: number;
      m: string;
      /**
       * 返回值同品牌-关联商品列表
       */
      d: {
        id: number;
        brandId: number;
        brandName: string;
        brandLogo: string;
        name: string;
        enName: string;
        tag: string[];
        url: string;
        productLogo: string;
        descibe: string;
        promotionTime: number;
        score: string;
        accountNum: number;
        worksNum: number;
        interactive: string;
        firstCatName: string;
        secondCatName: string;
        thirdCatName: string;
      }[];
      e: {
        total: number;
      };
    };
  };

  /**
   * 接口名：品类详情-关联品牌-品牌列表
   * Rap 地址: http://rap2.duomai.cn/repository/editor?id=32&mod=561&itf=3979
   */
  "GET/category/brand/list": {
    Req: {
      platform?: string;
      categoryId?: string;
      startDate?: string;
      endDate?: string;
      /**
       * 排序：
       * score 指数
       * accountNum 关联达人数
       * worksNum 关联作品数
       * interactive 互动数
       * brandNum 品牌数
       * productNum 商品数
       */
      orderName?: string;
      /**
       * 搜索
       */
      keyword?: string;
    };
    Res: {
      f: number;
      m: string;
      d: {
        logo: string;
        productNum: number;
        brandId: number;
        brandName: string;
        brandEnName: string;
        worksNum: number;
        interactive: number;
        averageInteractive: number;
        score: string;
      }[];
      e: {
        total: number;
        /**
         * 同品类详情
         */
        category: {
          accountNum: null;
          worksNum: null;
          interactive: null;
          brandNum: null;
          productNum: null;
          promotionWorksNum: null;
          promotionPrice: null;
          likes: null;
          comment: null;
          score: string;
          id: number;
          name: string;
          parentId: number;
          parentName: string;
          rank: null;
          updateTime: null;
          rankInfo: string;
        };
      };
    };
  };
}

type ResSelector<T> = T;

type TypeSelect<T extends "Req" | "Res"> = {
  [P in keyof IModels]: ResSelector<IModels[P][T]>;
};

export type IRequestTypes = TypeSelect<"Req">;
export type IResponseTypes = TypeSelect<"Res">;
