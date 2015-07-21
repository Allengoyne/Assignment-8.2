var profileUrl = 'https://api.github.com/users/allengoyne';
var reposUrl = 'https://api.github.com/users/allengoyne/repos';

var buildAvatar = function(data){
  console.log(data);

  var url = data.avatar_url
  var fullName = data.name;
  var userName = data.login;

  var $avatar = jQuery('.user img');
  var $fullName = jQuery('.user h1');
  var $userName = jQuery('.user h2');


  $avatar.attr('src', url);
  $fullName.text(fullName);
  $userName.text(userName);
};

var buildLocation = function(data){
  var location = data.location;
  var joinedDate = data.created_at;

  var $location = jQuery('.details .location');
  var $joined = jQuery('.details .joined');

  $location.text(location);
  $joined.text(joinedDate);

};

var buildMeta = function(data){
  var followers = data.followers;
  var following = data.following;
  var stars = 0;

  var $followers = jQuery('.meta .followers span');
  var $stars = jQuery('.meta .stars span');
  var $following = jQuery('.meta .following span');

  $followers.text(followers);
  $stars.text(stars);
  $following.text(following);

};

var buildAllRepos = function(repos){
  repos.map(buildRepo);
};

var buildRepo = function(repo){
  console.log(repo);
  var repoName = repo.full_name;
  var updated = repo.update_at;
  var language = repo.language;
  var stargazer = repo.stargazers_count;
  var forks = repo.forks_count;

  var $repoName = jQuery('.repo .reponame');
  var $updated = jQuery('.repo .updated');
  var $language = jQuery('.repo .language');
  var $stargazer = jQuery('.repo .stargazer');
  var $forks = jQuery('.repo .forks');

  $repoName.text(repo);
  $updated.text(repo);
  $language.text(repo);
  $stargazer.text(repo);
  $forks.text(repo);

};

jQuery.ajax(profileUrl).done(function(profile){
  buildAvatar(profile);
  buildLocation(profile);
  buildMeta(profile);
})

jQuery.ajax(reposUrl).done(function(repos){
  buildAllRepos(repos);
});
