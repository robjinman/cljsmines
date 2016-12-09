// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.db');
goog.require('cljs.core');
goog.require('re_frame.interop');
re_frame.db.app_db = re_frame.interop.ratom(cljs.core.PersistentArrayMap.EMPTY);
