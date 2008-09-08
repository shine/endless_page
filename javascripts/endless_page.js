var timer = null;

function iteration()
{
  if(timer == undefined) return; // listener was stopped

  //few versions of slider's vertical offset determination. more to come with new versions of IE :)
  var yOff = 0;
  if( typeof( window.pageYOffset ) == 'number' ) yOff = window.pageYOffset;
  else if( document.body && document.body.scrollTop ) yOff = document.body.scrollTop;
  else if( document.documentElement && document.documentElement.scrollTop ) yOff = document.documentElement.scrollTop;

  // if slider is low then send request for new items
  if(yOff/document.body.scrollHeight > ep_config.offset) new Ajax.Request(ep_config.url, {parameters: {asynchronous: true, evalScripts: true, authenticity_token: ep_config.auth_token, sort_by: ep_config.sort_by, container: ep_config.container, partial: ep_config.partial, last_value: ep_config.last_value}});

  // ...and start it again
  start_endless_page_listener();
}

function start_endless_page_listener()
{
  timer = setTimeout(function(){iteration()}, ep_config.period);
}

function stop_endless_page_listener()
{
  timer = null;
}

function EPConfig()
{
  this.offset = 0.75; // part of the scroller panel above scroller needed for new items adding
  this.period = 3000; // period of scroller state checking
  this.sort_by = 'id'; // field in DB that contains data that list is sorted by
  this.container = 'container'; // id of HTML component that contains data items shown in list. plugin will add new items to the bottom of this container
}