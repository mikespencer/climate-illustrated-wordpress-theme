<?php
$args = array(
  //'orderby' => 'name',
  //'parent' => 0
  );
$navItems = '';
$categories = get_categories( $args );
foreach ( $categories as $category ) {
  if($category->name != "Uncategorized"){
    $navItems  = $navItems . '<li><a href="' . get_category_link( $category->term_id ) . '">' . $category->name . '</a><li>';
  }
}
?>

<div class="globalNavSpacer"></div>
<nav class="globalNav clearfix mobile-menu-wrapper" role="navigation">
  <div class="globalNav-logoWrap">
    <img class="globalNav-logo" src="http://placehold.it/300x50&text=Climate+Illustrated" alt="Climate Illustrated" />
  </div>
</nav>
