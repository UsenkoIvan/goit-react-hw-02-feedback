(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),o=a(3),u=a(4),i=a(5),s=a(7),d=a(6),b=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,c=e.positivePercentage;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Good: ",l.a.createElement("span",null,t)),l.a.createElement("p",null,"Neutral: ",l.a.createElement("span",null,a)),l.a.createElement("p",null,"Bad: ",l.a.createElement("span",null,n)),l.a.createElement("p",null,"Total: ",l.a.createElement("span",null,r())),l.a.createElement("p",null,"Positive feedback:",l.a.createElement("span",null,c(),"%")))},m=function(e){var t=e.options,a=e.onLeaveFeedback,n=t.good,r=t.neutral,c=t.bad;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{name:"good",type:"button",value:n,onClick:function(){return a("good")}},"Good"),l.a.createElement("button",{name:"neutral",type:"button",value:r,onClick:function(){return a("neutral")}},"Neutral"),l.a.createElement("button",{name:"bad",type:"button",value:c,onClick:function(){return a("bad")}},"Bad"))},p=function(e){var t=e.title,a=e.children;return l.a.createElement("section",null,l.a.createElement("h2",null,t),a)},g=function(e){var t=e.messeage;return l.a.createElement("h2",null,t)},v=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={good:0,neutral:0,bad:0},e.handleChange=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)})),e.countTotalFeedback(),e.countPositiveFeedbackPercentage()},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good/e.countTotalFeedback()*100;return Number(t)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{title:"Please leave feedback"},l.a.createElement(m,{options:this.state,onLeaveFeedback:this.handleChange})),this.countTotalFeedback()>0?l.a.createElement(p,{title:"Statistics"},l.a.createElement(b,{good:t,neutral:a,bad:n,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage})):l.a.createElement(g,{messeage:"No feedback given"}))}}]),a}(n.Component);c.a.render(l.a.createElement(v,null),document.querySelector("#root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.c49966e8.chunk.js.map