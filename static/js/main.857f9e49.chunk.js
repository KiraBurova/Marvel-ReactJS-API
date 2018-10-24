(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){},128:function(e,a,t){},171:function(e,a,t){},173:function(e,a,t){},175:function(e,a,t){},178:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(78),l=t.n(r),s=(t(90),t(92),t(2)),i=t(3),o=t(5),m=t(4),u=t(6),d=t(181),h=t(8),E=t(179),p=(t(97),function(){return c.a.createElement("nav",{className:"menu white"},c.a.createElement("ul",{className:"menu__list"},c.a.createElement("li",{className:"menu__item"},c.a.createElement(E.a,{to:"/characters",className:"menu__link"},"Characters")),c.a.createElement("li",{className:"menu__item"},c.a.createElement(E.a,{to:"/comics",className:"menu__link"},"Comics")),c.a.createElement("li",{className:"menu__item"},c.a.createElement(E.a,{to:"/creators",className:"menu__link"},"Creators")),c.a.createElement("li",{className:"menu__item"},c.a.createElement(E.a,{to:"/events",className:"menu__link"},"Events")),c.a.createElement("li",{className:"menu__item"},c.a.createElement(E.a,{to:"/series",className:"menu__link"},"Series")),c.a.createElement("li",{className:"menu__item"},c.a.createElement(E.a,{to:"/stories",className:"menu__link"},"Stories"))))}),f=t(82),v=t.n(f),N=function(e){return c.a.createElement("nav",{className:v.a.app__nav},c.a.createElement(E.a,{to:"/"},"Home"),c.a.createElement("h1",null,e.text))},b=(t(100),function(){return c.a.createElement("section",{className:"main"},c.a.createElement(N,{text:"Marvel"}),c.a.createElement(p,null))}),y=t(14),O=t.n(y),g=t(32),j=t(104),k=(new Date).getTime(),w=j.MD5(k+"1abaad9e0d86c7a4c014a81caaf3e39ee3213bbbcc69f3ca3348ebf33c9c570217237713").toString(),_=function(e,a){return function(){var t=Object(g.a)(O.a.mark(function t(n){var c,r,l,s,i,o,m;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c={page:0,count:20},r=Object.assign(c,a),l=void 0===r.page?0:r.count*(r.page-1),t.next=5,fetch("https://gateway.marvel.com/v1/public/".concat(e,"?apikey=").concat(Fe,"&ts=").concat(k,"&hash=").concat(w,"&offset=").concat(l));case 5:return s=t.sent,t.next=8,s.json();case 8:return i=t.sent,t.next=11,i.data.results;case 11:return o=t.sent,t.next=14,i.data.total;case 14:m=t.sent,Object.assign(r,{totalPages:m}),n({type:"FETCH_DATA_ACTION",data:o,options:r});case 17:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},x=function(e,a){return function(){var t=Object(g.a)(O.a.mark(function t(n){var c,r,l;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://gateway.marvel.com/v1/public/".concat(e,"/").concat(a,"?apikey=").concat(Fe,"&ts=").concat(k,"&hash=").concat(w));case 2:return c=t.sent,t.next=5,c.json();case 5:return r=t.sent,t.next=8,r.data.results[0];case 8:l=t.sent,n({type:"FETCH_SINGLE_ITEM_ACTION",data:l});case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},C=function(e){return c.a.createElement("div",null,e.external?c.a.createElement("a",{href:e.link,className:"btn red darken-3 waves-effect",target:"_blank",rel:"noopener noreferrer"},e.text):c.a.createElement(E.a,{to:e.link,className:"btn red darken-3 waves-effect",target:e.target},e.text))},D=function(e){var a=e.character;return c.a.createElement("div",{className:"col s12 m6 l3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:"".concat(a.thumbnail.path,"/landscape_incredible.").concat(a.thumbnail.extension),alt:a.name}),c.a.createElement("span",{className:"card-title"},a.name)),c.a.createElement("div",{className:"card-action"},c.a.createElement(C,{text:"Learn More",link:"characters/".concat(a.id)}))))},I=(t(128),function(){return c.a.createElement("div",{className:"loader"})}),S=t(12),T=(t(29),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(e){this.props.fetchData("characters",{page:e}),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,a=this.props,t=a.characters,n=a.options;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},t?t.map(function(e){return c.a.createElement(D,{character:e,key:e.id})}):c.a.createElement(I,null)),n.count&&c.a.createElement(S.a,{current:n.page||1,total:n.totalPages,pageSize:n.count,onChange:function(a){return e.fetchData(a)}}),";")}}]),a}(n.Component)),R=Object(h.b)(function(e){return{characters:e.data.data,options:e.data.options}},{fetchData:_})(T),A=function(e){var a=e.value,t=e.onChangeValue,n=e.onSubmit;return c.a.createElement("div",{className:"input-field"},c.a.createElement("form",{onSubmit:function(e){return n(e)}},c.a.createElement("input",{id:"search",type:"text",value:a,onChange:function(e){return t(e)}}),c.a.createElement("button",{type:"submit",className:"btn waves-effect"},"Search")))},M=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={inputValue:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"onChangeValue",value:function(e){this.setState({inputValue:e.target.value}),e.target.value||this.props.fetchData(this.props.type)}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.fetchSearchedData(this.props.type,this.state.inputValue)}},{key:"render",value:function(){var e=this;return c.a.createElement(A,{value:this.state.inputValue,onChangeValue:function(a){return e.onChangeValue(a)},onSubmit:function(a){return e.onSubmit(a)}})}}]),a}(n.Component),U=Object(h.b)(function(e){return{searched:e.data.data}},{fetchSearchedData:function(e,a){return function(){var t=Object(g.a)(O.a.mark(function t(n){var c,r,l;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://gateway.marvel.com/v1/public/".concat(e,"?name=").concat(a,"&apikey=").concat(Fe,"&ts=").concat(k,"&hash=").concat(w));case 2:return c=t.sent,t.next=5,c.json();case 5:return r=t.sent,t.next=8,r.data.results[0];case 8:l=t.sent,n({type:"FETCH_SEARCHED_DATA_ACTION",data:l});case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},fetchData:_})(M),L=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(N,{text:"Characters"}),c.a.createElement(U,{type:"characters"}),c.a.createElement(R,null))}}]),a}(n.Component),F=(t(171),function(e){var a=e.character,t=e.onGetData;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6"},c.a.createElement("h4",null,a.name),c.a.createElement("div",{className:"character__image"},c.a.createElement("img",{src:"".concat(a.thumbnail.path,".").concat(a.thumbnail.extension),alt:a.name})),!!a.comics.available&&c.a.createElement("div",{className:"comics"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Comics")),a.comics.items.map(function(e){return c.a.createElement("a",{onClick:function(){return t(e.resourceURI,"comics")},className:"collection-item",key:e.name},e.name)}))),!!a.urls&&!!a.urls.length&&c.a.createElement("div",null,c.a.createElement("div",{className:"character__actions"},a.urls.map(function(e){return c.a.createElement(C,{text:e.type,link:e.url,key:e.url,external:!0})})))),c.a.createElement("div",{className:"col s12 m6"},!!a.events.available&&c.a.createElement("div",{className:"events"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Events")),a.events.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name)}))),!!a.series.available&&c.a.createElement("div",{className:"series"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Series")),a.series.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name)}))),!!a.stories.available&&c.a.createElement("div",{className:"stories"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Stories")),a.stories.items.map(function(e){return c.a.createElement("div",{key:e.name+e.type},c.a.createElement("a",{className:"collection-item",href:e.resourceURI},e.name,c.a.createElement("span",{className:"secondary-content"},e.type)))})))))}),H=(t(173),function(e){var a=e.info;return c.a.createElement("div",null,console.log(a),c.a.createElement("div",{className:"overlay"}),c.a.createElement("div",{className:"popup"},c.a.createElement("i",{className:"material-icons"},"close"),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:"".concat(a.thumbnail.path,".").concat(a.thumbnail.extension),alt:a.title}),c.a.createElement("span",{className:"card-title"},a.title)),c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,a.description)))))}),P=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchSingleItem("characters",+this.props.url)}},{key:"onGetData",value:function(e,a){var t=new RegExp("".concat(a,"/(.*)")).exec(e)[1];this.props.fetchAdditionalData(a,t)}},{key:"render",value:function(){var e=this,a=this.props.character,t=this.props.additional;return console.log(t),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},a?c.a.createElement(F,{character:a,key:a.id,onGetData:function(a,t){return e.onGetData(a,t)}}):c.a.createElement("span",null,"Loading data")),c.a.createElement("div",null,t&&c.a.createElement(H,{info:t})))}}]),a}(n.Component),V=Object(h.b)(function(e){return{character:e.data.item,additional:e.data.additional}},{fetchSingleItem:x,fetchAdditionalData:function(e,a){return function(){var t=Object(g.a)(O.a.mark(function t(n){var c,r,l;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://gateway.marvel.com/v1/public/".concat(e,"/").concat(a,"?apikey=").concat(Fe,"&ts=").concat(k,"&hash=").concat(w));case 2:return c=t.sent,t.next=5,c.json();case 5:return r=t.sent,t.next=8,r.data.results[0];case 8:l=t.sent,n({type:"FETCH_ADDITIONAL_INFO_ACTION",data:l});case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(P),z=function(e){return c.a.createElement("div",null,c.a.createElement(V,{url:e.match.params.id}))},G=(t(175),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("span",null,"Data provided by Marvel. \xa9 2018 MARVEL"))}),W=t(21),J=t(83),B=t(33),Q={data:[],item:null,additional:null,options:{}},Z=Object(W.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_DATA_ACTION":return Object(B.a)({},e,{data:a.data,options:a.options});case"FETCH_SINGLE_ITEM_ACTION":return Object(B.a)({},e,{item:a.data});case"FETCH_SEARCHED_DATA_ACTION":return Object(B.a)({},e,{data:e.data.filter(function(e){return e.id===a.data.id})});case"FETCH_ADDITIONAL_INFO_ACTION":return Object(B.a)({},e,{additional:a.data});default:return e}}}),$=[J.a],q=Object(W.d)(Z,{},W.a.apply(void 0,$)),K=function(e){var a=e.comic;return c.a.createElement("div",{className:"col s12 m6 l3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:"".concat(a.thumbnail.path,"/landscape_incredible.").concat(a.thumbnail.extension),alt:a.title}),c.a.createElement("span",{className:"card-title"},a.title)),c.a.createElement("div",{className:"card-action"},c.a.createElement(C,{text:"Learn More",link:"comics/".concat(a.id)}))))},X=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(e){this.props.fetchData("comics",{page:e}),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,a=this.props,t=a.comics,n=a.options;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},t?t.map(function(e){return c.a.createElement(K,{comic:e,key:e.id})}):c.a.createElement("span",null,"Loading data")),n.count&&c.a.createElement(S.a,{current:n.page||1,total:n.totalPages,pageSize:n.count,onChange:function(a){return e.fetchData(a)}}),";")}}]),a}(n.Component),Y=Object(h.b)(function(e){return{comics:e.data.data,options:e.data.options}},{fetchData:_})(X),ee=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(N,{text:"Comics"}),c.a.createElement(Y,null))}}]),a}(n.Component),ae=function(e){var a=e.comic;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-main"},c.a.createElement("span",{className:"card-title"},a.name),c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:"".concat(a.thumbnail.path,".").concat(a.thumbnail.extension),alt:a.name})),c.a.createElement("p",null,a.description),c.a.createElement("span",null,"Format: ",a.format),c.a.createElement("br",null),c.a.createElement("span",null,"Page count: ",a.pageCount),c.a.createElement("br",null),c.a.createElement("span",null,"Issue Number: ",a.issueNumber)),c.a.createElement("div",{className:"card-content"},!!a.characters.available&&c.a.createElement("div",{className:"characters"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Characters")),a.characters.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name)}))),!!a.events.available&&c.a.createElement("div",{className:"events"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Events")),a.events.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name)}))),!!a.series.available&&c.a.createElement("div",{className:"series"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Series")),c.a.createElement("a",{className:"collection-item",key:a.series.name,href:a.series.resourceURI},a.series.name))),!!a.stories.available&&c.a.createElement("div",{className:"stories"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Stories")),a.stories.items.map(function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("a",{className:"collection-item",href:e.resourceURI},e.name,c.a.createElement("span",{className:"secondary-content"},e.type)))})))),!!a.urls&&!!a.urls.length&&c.a.createElement("div",{className:"card-action"},c.a.createElement("div",{className:"comic__actions"},a.urls.map(function(e){return c.a.createElement(C,{text:e.type,link:e.url,key:e.url})}))))},te=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchSingleItem("comics",+this.props.url)}},{key:"render",value:function(){var e=this.props.comic;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 "},e?c.a.createElement(ae,{comic:e,key:e.id}):c.a.createElement("span",null,"Loading data")))}}]),a}(n.Component),ne=Object(h.b)(function(e){return{comic:e.data.item}},{fetchSingleItem:x})(te),ce=function(e){return c.a.createElement("div",null,c.a.createElement(ne,{url:e.match.params.id}))},re=function(e){var a=e.creator;return c.a.createElement("div",{className:"col s12 m6 l3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:"".concat(a.thumbnail.path,"/landscape_incredible.").concat(a.thumbnail.extension),alt:a.fullName}),c.a.createElement("span",{className:"card-title truncate"},a.fullName)),c.a.createElement("div",{className:"card-action"},c.a.createElement(C,{text:"Learn More",link:"creators/".concat(a.id)}))))},le=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(e){this.props.fetchData("creators",{page:e}),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,a=this.props,t=a.creators,n=a.options;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},t?t.map(function(e){return c.a.createElement(re,{creator:e,key:e.id})}):c.a.createElement("span",null,"Loading data")),n.count&&c.a.createElement(S.a,{current:n.page||1,total:n.totalPages,pageSize:n.count,onChange:function(a){return e.fetchData(a)}}),";")}}]),a}(n.Component),se=Object(h.b)(function(e){return{creators:e.data.data,options:e.data.options}},{fetchData:_})(le),ie=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(N,{text:"Creators"}),c.a.createElement(se,null))}}]),a}(n.Component),oe=function(e){var a=e.creator;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-main"},c.a.createElement("span",{className:"card-title"},a.fullName),c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:"".concat(a.thumbnail.path,".").concat(a.thumbnail.extension),alt:a.fullName}))),c.a.createElement("div",{className:"card-content"},!!a.comics.available&&c.a.createElement("div",{className:"comics"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Comics")),a.comics.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name)}))),!!a.events.available&&c.a.createElement("div",{className:"events"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Events")),a.events.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name)}))),!!a.series.available&&c.a.createElement("div",{className:"series"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Series")),a.series.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name)}))),!!a.stories.available&&c.a.createElement("div",{className:"stories"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Stories")),a.stories.items.map(function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("a",{className:"collection-item",href:e.resourceURI},e.name,c.a.createElement("span",{className:"secondary-content"},e.type)))})))),!!a.urls&&!!a.urls.length&&c.a.createElement("div",{className:"card-action"},c.a.createElement("div",{className:"creator__actions"},a.urls.map(function(e){return c.a.createElement(C,{text:e.type,link:e.url,key:e.url})}))))},me=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchSingleItem("creators",+this.props.url)}},{key:"render",value:function(){var e=this.props.creator;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 "},e?c.a.createElement(oe,{creator:e,key:e.id}):c.a.createElement("span",null,"Loading data")))}}]),a}(n.Component),ue=Object(h.b)(function(e){return{creator:e.data.item}},{fetchSingleItem:x})(me),de=function(e){return c.a.createElement("div",null,c.a.createElement(ue,{url:e.match.params.id}))},he=function(e){var a=e.event;return c.a.createElement("div",{className:"col s12 m6 l3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:"".concat(a.thumbnail.path,"/landscape_incredible.").concat(a.thumbnail.extension),alt:a.title}),c.a.createElement("span",{className:"card-title truncate"},a.title)),c.a.createElement("div",{className:"card-action"},c.a.createElement(C,{text:"Learn More",link:"events/".concat(a.id)}))))},Ee=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(e){this.props.fetchData("events",{page:e}),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,a=this.props,t=a.events,n=a.options;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},t?t.map(function(e){return c.a.createElement(he,{event:e,key:e.id})}):c.a.createElement("span",null,"Loading data")),n.count&&c.a.createElement(S.a,{current:n.page||1,total:n.totalPages,pageSize:n.count,onChange:function(a){return e.fetchData(a)}}),";")}}]),a}(n.Component),pe=Object(h.b)(function(e){return{events:e.data.data,options:e.data.options}},{fetchData:_})(Ee),fe=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(N,{text:"Events"}),c.a.createElement(pe,null))}}]),a}(n.Component),ve=function(e){var a=e.event;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-main"},c.a.createElement("span",{className:"card-title"},a.title),c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:"".concat(a.thumbnail.path,".").concat(a.thumbnail.extension),alt:a.title}))),c.a.createElement("div",{className:"card-content"},!!a.comics.available&&c.a.createElement("div",{className:"comics"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Comics")),a.comics.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name)}))),!!a.creators.available&&c.a.createElement("div",{className:"creators"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Creators")),a.creators.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name," (",e.role,")")}))),!!a.series.available&&c.a.createElement("div",{className:"series"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Series")),a.series.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name)}))),!!a.stories.available&&c.a.createElement("div",{className:"stories"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Stories")),a.stories.items.map(function(e){return c.a.createElement("div",{key:e.name+e.type},c.a.createElement("a",{className:"collection-item",href:e.resourceURI},e.name,c.a.createElement("span",{className:"secondary-content"},e.type)))})))),!!a.urls&&!!a.urls.length&&c.a.createElement("div",{className:"card-action"},c.a.createElement("div",{className:"event__actions"},a.urls.map(function(e){return c.a.createElement(C,{text:e.type,link:e.url,key:e.url})}))))},Ne=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchSingleItem("events",+this.props.url)}},{key:"render",value:function(){var e=this.props.event;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 "},e?c.a.createElement(ve,{event:e,key:e.id}):c.a.createElement("span",null,"Loading data")))}}]),a}(n.Component),be=Object(h.b)(function(e){return{event:e.data.item}},{fetchSingleItem:x})(Ne),ye=function(e){return c.a.createElement("div",null,c.a.createElement(be,{url:e.match.params.id}))},Oe=function(e){var a=e.story;return c.a.createElement("div",{className:"col s12 m6 l3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,a.title)),c.a.createElement("div",{className:"card-action"},c.a.createElement(C,{text:"Learn More",link:"stories/".concat(a.id)}))))},ge=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(e){this.props.fetchData("stories",{page:e}),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,a=this.props,t=a.stories,n=a.options;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},t?t.map(function(e){return c.a.createElement(Oe,{story:e,key:e.id})}):c.a.createElement("span",null,"Loading data")),n.count&&c.a.createElement(S.a,{style:{margin:"100px"},current:n.page||1,total:n.totalPages,pageSize:n.count,onChange:function(a){return e.fetchData(a)}}),";")}}]),a}(n.Component),je=Object(h.b)(function(e){return{stories:e.data.data,options:e.data.options}},{fetchData:_})(ge),ke=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(N,{text:"Stories"}),c.a.createElement(je,null))}}]),a}(n.Component),we=function(e){var a=e.story;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-main"},c.a.createElement("span",{className:"card-title"},a.title," ",a.type),c.a.createElement("div",null,"Original issue ",c.a.createElement("a",{href:a.originalIssue.resourceURI},a.originalIssue.name))),c.a.createElement("div",{className:"card-content"},!!a.comics.available&&c.a.createElement("div",{className:"comics"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Comics")),a.comics.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name)}))),!!a.creators.available&&c.a.createElement("div",{className:"creators"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Creators")),a.creators.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name," (",e.role,")")}))),!!a.series.available&&c.a.createElement("div",{className:"series"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Series")),a.series.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name)}))),!!a.characters.available&&c.a.createElement("div",{className:"characters"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Characters")),a.characters.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name)})))))},_e=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchSingleItem("stories",+this.props.url)}},{key:"render",value:function(){var e=this.props.story;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 "},e?c.a.createElement(we,{story:e,key:e.id}):c.a.createElement("span",null,"Loading data")))}}]),a}(n.Component),xe=Object(h.b)(function(e){return{story:e.data.item}},{fetchSingleItem:x})(_e),Ce=function(e){return c.a.createElement("div",null,c.a.createElement(xe,{url:e.match.params.id}))},De=function(e){var a=e.series;return c.a.createElement("div",{className:"col s12 m6 l3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:"".concat(a.thumbnail.path,"/landscape_incredible.").concat(a.thumbnail.extension),alt:a.title}),c.a.createElement("span",{className:"card-title"},a.title)),c.a.createElement("div",{className:"card-action"},c.a.createElement(C,{text:"Learn More",link:"series/".concat(a.id)}))))},Ie=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(e){this.props.fetchData("series",{page:e}),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,a=this.props,t=a.series,n=a.options;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},t?t.map(function(e){return c.a.createElement(De,{series:e,key:e.id})}):c.a.createElement("span",null,"Loading data")),n.count&&c.a.createElement(S.a,{current:n.page||1,total:n.totalPages,pageSize:n.count,onChange:function(a){return e.fetchData(a)}}),";")}}]),a}(n.Component),Se=Object(h.b)(function(e){return{series:e.data.data,options:e.data.options}},{fetchData:_})(Ie),Te=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(N,{text:"Series"}),c.a.createElement(Se,null))}}]),a}(n.Component),Re=function(e){var a=e.series;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-main"},c.a.createElement("span",{className:"card-title"},a.title),c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:"".concat(a.thumbnail.path,".").concat(a.thumbnail.extension),alt:a.title}))),c.a.createElement("div",{className:"card-content"},!!a.comics.available&&c.a.createElement("div",{className:"comics"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Comics")),a.comics.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name)}))),!!a.creators.available&&c.a.createElement("div",{className:"creators"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Creators")),a.creators.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name," (",e.role,")")}))),!!a.characters.available&&c.a.createElement("div",{className:"characters"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Characters")),a.characters.items.map(function(e){return c.a.createElement("a",{className:"collection-item",key:e.name,href:e.resourceURI},e.name)}))),!!a.stories.available&&c.a.createElement("div",{className:"stories"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",null,"Stories")),a.stories.items.map(function(e){return c.a.createElement("div",{key:e.name+e.type},c.a.createElement("a",{className:"collection-item",href:e.resourceURI},e.name,c.a.createElement("span",{className:"secondary-content"},e.type)))})))),!!a.urls&&!!a.urls.length&&c.a.createElement("div",{className:"card-action"},c.a.createElement("div",{className:"series__actions"},a.urls.map(function(e){return c.a.createElement(C,{text:e.type,link:e.url,key:e.url})}))))},Ae=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchSingleItem("series",+this.props.url)}},{key:"render",value:function(){var e=this.props.series;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 "},e?c.a.createElement(Re,{series:e,key:e.id}):c.a.createElement("span",null,"Loading data")))}}]),a}(n.Component),Me=Object(h.b)(function(e){return{series:e.data.item}},{fetchSingleItem:x})(Ae),Ue=function(e){return c.a.createElement("div",null,c.a.createElement(Me,{url:e.match.params.id}))},Le=function(){return c.a.createElement(h.a,{store:q},c.a.createElement("div",null,c.a.createElement(d.a,{path:"/",exact:!0,component:b}),c.a.createElement(d.a,{path:"/characters",exact:!0,component:L}),c.a.createElement(d.a,{path:"/characters/:id",exact:!0,component:z}),c.a.createElement(d.a,{path:"/comics",exact:!0,component:ee}),c.a.createElement(d.a,{path:"/comics/:id",exact:!0,component:ce}),c.a.createElement(d.a,{path:"/creators",exact:!0,component:ie}),c.a.createElement(d.a,{path:"/creators/:id",exact:!0,component:de}),c.a.createElement(d.a,{path:"/events",exact:!0,component:fe}),c.a.createElement(d.a,{path:"/events/:id",exact:!0,component:ye}),c.a.createElement(d.a,{path:"/series",exact:!0,component:Te}),c.a.createElement(d.a,{path:"/series/:id",exact:!0,component:Ue}),c.a.createElement(d.a,{path:"/stories",exact:!0,component:ke}),c.a.createElement(d.a,{path:"/stories/:id",exact:!0,component:Ce}),c.a.createElement(G,null)))},Fe="cc69f3ca3348ebf33c9c570217237713",He=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(Le,null)}}]),a}(n.Component),Pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ve(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ze=t(180);l.a.render(c.a.createElement(ze.a,null,c.a.createElement(He,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Marvel-ReactJS-API",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/Marvel-ReactJS-API","/service-worker.js");Pe?(function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ve(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Ve(e)})}}()},82:function(e,a,t){e.exports={app__nav:"Navbar_app__nav__1Im2Z"}},85:function(e,a,t){e.exports=t(178)},90:function(e,a,t){},92:function(e,a,t){},97:function(e,a,t){}},[[85,2,1]]]);
//# sourceMappingURL=main.857f9e49.chunk.js.map