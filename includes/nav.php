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
<div class="globalNav clearfix mobile-menu-wrapper toggle-mobile-menu align-center" role="navigation">
    <a class="hamburger"></a>
    <h2 class="globalNav-logoWrap">
      <a class="styledFontLogo globalNav-logo" href="<?php echo home_url(); ?>">
        <?php bloginfo( 'name' ); ?>
      </a>
    </h2>
</div>
