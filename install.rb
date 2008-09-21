require 'fileutils'

rjs_home = '../../../app/views/endless_page'
FileUtils.mkdir rjs_home
FileUtils.cp %w(rjs/append.js.rjs rjs/have_nothing_to_add.js.rjs), 
rjs_home

FileUtils.cp 'javascripts/endless_page.js', '../../../public/javascripts'
