<?php

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
  wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

add_action( 'wp_enqueue_scripts', 'theme_enqueue_scripts' );
function theme_enqueue_scripts() {
  wp_enqueue_script( 'climate-illustrated', get_stylesheet_directory_uri() . '/dist/js/main.min.js', array(), '1.0.0', true );
}

?>
