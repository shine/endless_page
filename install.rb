require 'fileutils'

rjs_home = '../../../app/views/endless_page'
FileUtils.mkdir rjs_home
FileUtils.cp %w(rjs/append.rjs rjs/have_nothing_to_add.rjs), rjs_home

FileUtils.cp 'javascripts/endless_page.js', '../../../public/javascripts'