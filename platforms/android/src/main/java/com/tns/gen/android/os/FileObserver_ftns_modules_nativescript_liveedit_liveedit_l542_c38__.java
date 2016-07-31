package com.tns.gen.android.os;

public class FileObserver_ftns_modules_nativescript_liveedit_liveedit_l542_c38__ extends android.os.FileObserver implements com.tns.NativeScriptHashCodeProvider {
	public FileObserver_ftns_modules_nativescript_liveedit_liveedit_l542_c38__(java.lang.String param_0){
		super(param_0);
		com.tns.Runtime.initInstance(this);
	}

	public FileObserver_ftns_modules_nativescript_liveedit_liveedit_l542_c38__(java.lang.String param_0, int param_1){
		super(param_0, param_1);
		com.tns.Runtime.initInstance(this);
	}

	public void onEvent(int param_0, java.lang.String param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onEvent", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
