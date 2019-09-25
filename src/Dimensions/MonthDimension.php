<?php

namespace LaravelBi\LaravelBi\Dimensions;

use DB;
use LaravelBi\LaravelBi\Widgets\Widget;
use Illuminate\Database\Eloquent\Builder;

class MonthDimension extends BaseDimension
{
    public function apply(Builder $builder, Widget $widget): Builder
    {
        return $builder->addSelect(DB::raw("DATE_FORMAT({$this->column}, '%Y-%m') as `{$this->key}`"))
                       ->groupBy($this->key);
    }
}
