<svelte:options tag="add-file-folder"></svelte:options>

<script lang="ts">

	import { componentList ,key} from "../stores/ComponentList.js";
	$: identifier = $key;
	type FileProp={
		id: number,
		text:string
	}
	let types : Array<FileProp>=[
		{ id:1, text: `File`},
	    { id:2, text: `Folder`}
	];

	let name: String, selectedType: FileProp, selectedFolder: String;

	type File = {
		name: String;
		type:number;
		id: number
	};

	type List = {
		name: String;
		id: number;
		type: number;
		files?: Array<File>;
	}

	$: level =
    $componentList && $componentList.length
      ? [
          "Root",
          ...$componentList
            .filter((list) => list.type == 2)
            .map((list) => list.name),
        ]
      : ["Root"];

	function handleSave()
	{
    if(!name)
    {
      alert("Please enter the name");
      return; 
    }
    key.update(n=>n+1);
    componentList.update((list: Array<List>) => {
      if (selectedFolder === "Root"){

        const isFileNameExists = list.find(
          (l) => l.name == name && l.type == selectedType.id
        );
        if (isFileNameExists) {
          alert(
            `This ${selectedType.text} with name ${name} is already exists at same level`
          );
          return list;
        }
            return [
            ...list,
            {
              name: name,
              type: selectedType.id,
              id:identifier
            },
          ];
        }
      else if (selectedFolder) {

        let isnameExistAtSamelevel;

        const fileMetaData = {
          name,
          type: selectedType.id,
          id:identifier
        };
        
        list.map((l) => {
          if (l.name === selectedFolder && l.type === 2) {
            isnameExistAtSamelevel =
              l.files &&
              l.files.find((x) => x.name == name && x.type == selectedType.id);
            if (isnameExistAtSamelevel) {
              alert(
                `This ${selectedType.text} with name ${name} is already exists at same level`
              );
            }
          } 
        });

        if(isnameExistAtSamelevel)
        {
          return list;
        }

        var newList = list.map((l) => {
          if (l.name === selectedFolder) {
            let files = l.files ? [...l.files, fileMetaData] : [fileMetaData];
            return { ...l, files };
          } else return l;
        });
        return [...newList];
      }
    });
    name = "";
	}

	function handleReset()
	{
		componentList.set([]);
		name = "";
    selectedFolder="Root"
		level = ["Root"];

	}

  function handleCancel()
	{
		  name = "";
	}
</script>

<div>
<div class="form-group">

	<input bind:value={name}
    class="input-text"
    type="text"
    placeholder="Add a file or folder name"/>


	<div class="input-type">
		<select name="type" id="select-type" bind:value={selectedType}>
			{#each types as type}
			<option value={type}>
				{type.text}
			</option>
		{/each}
		</select>
	</div>
	  {#if level && level.length}
	<div class="folder-list">
		<select name="type" id="folder-list-type" bind:value={selectedFolder}>
		  {#each level as name}
			<option value={name}>{name}</option>
		  {/each}
		</select>
	</div>
	{/if}

  <div class="form-button">
    <button on:click={handleSave} class="button-save">Save</button>
  </div>

  <div class="form-button">
    <button on:click={handleCancel} class="button-cancel">Cancel</button>
  </div>

  <div class="form-button">
    <button on:click={handleReset} class="button-reset">Reset</button>
  </div>

</div>

<style>
  .form-group {
    display: flex;
    width: 58%;
    height: 40px;
    margin: 5% 25% 1% 18%;
  }
  .input-text {
    flex: 4;
    margin-right: 10px;
    outline: none;
    margin-right: 10px;
    margin-left: 0px;
    border-radius: 3px;
    border: 1px solid rgba(78, 78, 87, 0.596);
  }
  .input-type {
    display: flex;
    flex: 1;
  }
  #select-type {
    margin-right: 8px;
    border-radius: 3px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .folder-list {
    display: flex;
    flex: 1.5;
  }
  #folder-list-type {
    margin-right: 8px;
    border-radius: 3px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .form-button{
        flex: 1.5;
    }

    .button-save{
    width: 80%;
    height:100%;
    margin-right: 10px;
    font-size: 15px;
    outline: none;
    border: 0;
    background: rgb(96, 73, 199);
    color: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 3px;
    }

    .button-cancel{
    width: 80%;
    height:100%;
    margin-right: 10px;
    font-size: 15px;
    outline: none;
    border: 0;
    background: rgb(192, 99, 99);
    color: white;
    border-radius: 3px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    .button-reset{
    width: 80%;
    height:100%;
    font-size: 15px;
    outline: none;
    border: 0;
    background: rgb(226, 44, 44);
    color: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 3px;
    }

</style>
</div>