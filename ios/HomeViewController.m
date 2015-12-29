//
//  HomeViewController.m
//  react_pro1
//
//  Created by YURI_JOU on 15/12/25.
//  Copyright © 2015年 Facebook. All rights reserved.
//

#import "HomeViewController.h"
#import "RCTRootView.h"

@interface HomeViewController ()

@end

@implementation HomeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
  UIButton *button = [[UIButton alloc]initWithFrame:CGRectMake(0, 0, 300, 50)];
  [button setBackgroundColor:[UIColor orangeColor]];
  [self.view addSubview:button];
  
  [button addTarget:self action:@selector(handleTap) forControlEvents:UIControlEventTouchUpInside];
  self.view.backgroundColor = [UIColor whiteColor];
}

- (void)handleTap
{
  NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"App"
                                               initialProperties:nil
                                                   launchOptions:nil];
  rootView.frame = [UIScreen mainScreen].bounds;
  [self.view addSubview:rootView];
  
  
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}

@end
